import Image from 'next/image'

export default function table() {
    return (
        <div className="overflow-x-auto mx-auto max-w-3xl">
            <div className="sm:flex sm:items-center sm:justify-between">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Photos uploaded (total 4)</h2>

                <div className="flex items-center mb-2 gap-x-3">
                    <button
                        type="submit"
                        className="btn"
                    >
                        Clear All
                    </button>
                    <button
                        type="submit"
                        className="btn"
                    >
                        Download All
                    </button>
                </div>
            </div>

            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Converted Size</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image
                                            src="/hero-mobile.png"
                                            width={1000}
                                            height={760}
                                            className="hidden md:block"
                                            alt="Screenshots of the dashboard project showing desktop version"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </th>
                        <td>
                            <span>1.2 MB</span>
                        </td>
                        <td>
                            <span>2.4 MB</span>
                        </td>
                        <th>
                            <button className="btn btn-ghost btn-xs">download</button>
                        </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image
                                            src="/hero-mobile.png"
                                            width={1000}
                                            height={760}
                                            className="hidden md:block"
                                            alt="Screenshots of the dashboard project showing desktop version"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </th>
                        <td>
                            <span>1.2 MB</span>
                        </td>
                        <td>
                            <span>2.4 MB</span>
                        </td>
                        <th>
                            <button className="btn btn-ghost btn-xs">download</button>
                        </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image
                                            src="/hero-mobile.png"
                                            width={1000}
                                            height={760}
                                            className="hidden md:block"
                                            alt="Screenshots of the dashboard project showing desktop version"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </th>
                        <td>
                            <span>1.2 MB</span>
                        </td>
                        <td>
                            <span>2.4 MB</span>
                        </td>
                        <th>
                            <button className="btn btn-ghost btn-xs">download</button>
                        </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                        <th>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image
                                            src="/hero-mobile.png"
                                            width={1000}
                                            height={760}
                                            className="hidden md:block"
                                            alt="Screenshots of the dashboard project showing desktop version"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </th>
                        <td>
                            <span>1.2 MB</span>
                        </td>
                        <td>
                            <span>2.4 MB</span>
                        </td>
                        <th>
                            <button className="btn btn-ghost btn-xs">download</button>
                        </th>
                    </tr>
                </tbody>
            </table>
            <div className="join grid grid-cols-2 mt-2 max-w-sm">
                <button className="join-item btn">   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:-scale-x-100"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                </svg>
                    Previous page</button>
                <button className="join-item btn">Next
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 rtl:-scale-x-100"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg></button>
            </div>

        </div>
    )


}