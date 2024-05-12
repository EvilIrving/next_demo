export default function actions() {
    return (
        <section className="flex gap-4 py-4 mx-auto max-w-3xl">
            <button className="btn">
                <span className="loading loading-spinner"></span>
                Convert
            </button>
            <button
                type="submit"
                className="btn"
            >
                Preview
            </button>
            {/* <button type="submit" className="btn">Download All</button> */}
        </section>
    )
}