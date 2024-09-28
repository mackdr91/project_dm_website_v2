import GitHubProvider from "next-auth/providers/github";
import connectdb from "@/config/database";
import User from "@/models/User";
import { signOut } from "next-auth/react";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
            prompt: "consent",
            access_type: "online",
            response_type: "code",
      },
    },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      // Connect to the database
      await connectdb();

      // Admin email to restrict access
      const adminEmail = process.env.ADMIN_EMAIL;

      // GitHub profile may not always contain an email, handle that case
      const email = profile.email;

      if (!email) {
        console.log("No email found in GitHub profile.");
        return false; // Reject the sign-in attempt if no email is found
      }

      // Check if the email matches the admin email
      if (email !== adminEmail) {
        console.log("Unauthorized access attempt by: ", email);
        return false; // Deny access if the user is not the admin
      }

      // Check if the admin user exists in the database
      const userExists = await User.findOne({ email });

      // If the user doesn't exist, create a new user entry
      if (!userExists) {
        await User.create({
          email: email,
          username: profile.name.slice(0, 20), // Truncate the name to 20 characters
          image: profile.avatar_url, // GitHub provides avatar_url instead of picture
        });
      }

      // Allow sign-in for the authorized admin
      return true;
    },
    

    async session({ session }) {
      // Fetch the user from the database
      const user = await User.findOne({ email: session.user.email });

      // Attach the user ID to the session object
      session.user.id = user._id.toString();

      // Return the modified session
      return session;
    },
  },
};