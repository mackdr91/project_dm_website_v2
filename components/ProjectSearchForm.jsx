import { useState } from "react";
import { useRouter } from "next/navigation";

const ProjectSearchForm = () => {
    const [tech, setTech] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tech === "") {
            router.push("/projects");
        }else{
            router.push(`/projects?technologies=${tech}`);
        }

    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
        >
            <div className="flex flex-col gap-1">
                <label
                    htmlFor="technologies"
                    className="block text-lg font-medium "
                >
                    Technologies
                </label>
                <input
                    type="text"
                    name="technologies"
                    id="technologies"
                    placeholder="Enter technologies"
                    value={tech}
                    onChange={(e) => setTech(e.target.value)}
                    className="p-2 block w-full text-black rounded-md border-blue-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-lg"
                />
            </div>
            <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded"
            >
                Search
            </button>
        </form>
     );
}

export default ProjectSearchForm;