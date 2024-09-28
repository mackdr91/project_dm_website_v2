import addProject from "@/actions/addProject";
import { convertToSerializedObject } from "../utils/convertToObject";
const ProjectAddForm = () => {
    return (

        <form
            action={addProject}
            method="post"
            className="flex flex-col gap-4"
        >
            <div className="flex flex-col gap-1">
                <label
                    htmlFor="title"
                    className="block text-lg font-medium "
                >
                    Project Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter project title"
                    className="p-2 block w-full text-black rounded-md border-blue-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-lg"
                />
            </div>
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
                    placeholder=" Enter technologies (separated by commas)"
                    className="p-2 block w-full text-black  rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-lg"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label
                    htmlFor="description"
                    className="block text-lg font-medium "
                >
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    className="p-2 block w-full text-black  rounded-md border-gray-300 shadow-sm
                     focus:border-orange-500 focus:ring-orange-500 sm:text-lg h-[200px]"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label
                    htmlFor="github_link"
                    className="py-2 block text-lg font-medium "
                >
                    Github Link
                </label>
                <input
                    type="text"
                    name="github_link"
                    id="github_link"
                    className="p-2 block w-full text-black  rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-lg"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label
                    htmlFor="link"
                    className="px-2 block text-lg font-medium "
                >
                    Link
                </label>
                <input
                    type="text"
                    name="link"
                    id="link"
                    className="p-2 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-lg"
                />
            </div>
            <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white rounded-md py-2 px-4"
            >
                Add Project
            </button>
        </form>

     );
}

export default ProjectAddForm;