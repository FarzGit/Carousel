import AdminNavBar from "../adminNavBar/AdminNavBar";

function adminVedioList() {

    return (
        <div className="">
            {/* <span className="text-xl font-bold absolute mt-4 ml-5">Welcome Admin</span>
            <div className="w-full flex justify-end">
                <button className="h-10 w-20 hover:bg-red-700 bg-black rounded-lg text-white hover:scale-105 mr-10 mt-5">Log Out</button>
            </div> */}
            <div className="flex items-center justify-center mt-20">
                <div className="overflow-x-auto h-3/5 w-3/5 max-lg:w-ful p-5 max-lg:px-4 rounded-md border-2 shadow-md bg-white">
                    <div className="flex justify-around max-sm:grid items-center">
                        <div>
                            <h1 className="mb-5 text-3xl font-bold max-lg:text-xl">
                                Uploaded Vedio List
                            </h1>
                        </div>


                    </div>
                    <table className="min-w-full bg-white border border-gray-300 mt-3">
                        <thead>
                            <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2 justify-center">sl.no</th>

                                <th className="border border-gray-300 p-2 justify-center">Name</th>
                                <th className="border border-gray-300 p-2 flex items-center justify-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-300">
                            <td className="border-r border-gray-300 p-3 font-medium">1.</td>

                                <td className="border-r border-gray-300 p-3 ">sdfgsdfg</td>
                                <td className="flex justify-center p-2">


                                    <button
                                        className=" h-10 w-20 hover:bg-red-700 bg-black rounded-lg text-white hover:scale-105"
                                    >
                                        Delete
                                    </button>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>




            </div>
        </div>
    );
}

export default adminVedioList