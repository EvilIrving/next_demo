import Upload from '@/app/ui/customers/upload'
import Config from '@/app/ui/customers/trans-config'
import Buttons from '@/app/ui/customers/actions'
import Table from '@/app/ui/customers/table'
import FAQ from '@/app/ui/customers/faq'
export default function Page() {
    return (
        <main>
            <h1 className="text-2xl font-bold text-center my-5">HEIC/HEIF Simple, Free, and Offline Converter</h1>
            <Upload />
            <Config />
            <Buttons />
            <Table />
            <FAQ />
        </main>
    )
}
