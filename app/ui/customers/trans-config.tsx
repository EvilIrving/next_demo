export default function config() {
    return (
        <section className=" py-4 mx-auto max-w-3xl">
            <div className="mt-2">
                <label
                    htmlFor=""
                    className="block text-lg font-medium text-gray-700 mb-2"
                >
                    Convert to
                </label>
                <div className="flex w-full">
                    <button className="btn grid h-10 flex-grow  bg-base-300 rounded-box place-items-center">JPG</button>
                    <div className="divider divider-horizontal"></div>
                    <button className="btn grid h-10 flex-grow  bg-base-300 rounded-box place-items-center">PNG</button>
                </div>
            </div>

            <div className="mt-4">
                <label
                    htmlFor=""
                    className="block text-lg font-medium text-gray-700 mb-2"
                >
                    Quality
                </label>
                <input
                    type="range"
                    min={0}
                    max="100"
                    value="30"
                    className="range range-xs"
                />
            </div>
        </section>
    )
}