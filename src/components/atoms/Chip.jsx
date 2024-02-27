import { DateChip, DiseaseChip, DoctorChip, TimeChip } from "../../constants/ChipsList";

export default function Chip({ label, type }) {

    const ChipComponents = {
        doc: DoctorChip,
        disease: DiseaseChip,
        date: DateChip,
        time: TimeChip,
    };

    const ChipComponent = ChipComponents[type]

    return <ChipComponent label={label} />
}