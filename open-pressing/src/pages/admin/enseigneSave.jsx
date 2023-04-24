import EnseigneForm from "../../components/enseigneForm"
import Tables from "@/components/table"
import EnseigneTable from "../../components/enseigneTable"
export default function () {
    return(
        <>
            <Tables>
                <EnseigneTable />
            </Tables>
            <EnseigneForm />
        </>
    )
}