import Typography from '../components/atoms/Typography';
import moment from "moment";
import star_icon from '../assets/media/star.png';
import calendar_icon from '../assets/media/calendar.png';
import clock_icon from '../assets/media/clock.png';

export function DoctorChip({ label }) {
    return (
        <div className="flex items-center">
            <img src={star_icon} alt='star-icon' className="w-5 h-5 me-1" />
            <Typography variant="body1" style={{ color: '#b4b4c7' }}>{label}</Typography>
        </div>
    )
}

export function DiseaseChip({ label }) {
    return (
        <span id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300" style={{ backgroundColor: '#e4ecf7' }}>
            <Typography variant="body5" style={{ fontWeight: 'bold', color: '#757c9e' }}>{label}</Typography>
        </span>
    )
}

export function DateChip({ label }) {
    return (
        <div className="flex items-center">
            <img src={calendar_icon} alt='star-icon' className="w-7 h-7 me-1" />
            <Typography variant="body1" style={{ color: '#b4b4c7' }}>{moment(label).format('DD MMM YYYY')}</Typography>
        </div>
    )
}

export function TimeChip({ label }) {
    return (
        <div className="flex items-center">
            <img src={clock_icon} alt='star-icon' className="w-6 h-6 me-1" />
            <Typography variant="body1" style={{ color: '#b4b4c7' }}>{label}</Typography>
        </div>
    )
}