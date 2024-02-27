import Avatar from "../atoms/Avatar";
import Typography from "../atoms/Typography";

export default function UserInfo({ data }) {
    return (
        <div className="flex items-center">
            <Avatar name={data?.patient_name} />
            <div className="pl-2">
                <Typography variant="body1" style={{ color: '#000' }}>{data?.patient_name}</Typography>
                <Typography variant="body5" style={{ color: '#b4b4c7' }}>{data?.mobile_number}</Typography>
            </div>
        </div>
    );
}