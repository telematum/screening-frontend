import RowDataWrapper from "./RowDataWrapper";

const Patient = ({name, phoneNumber}) => {
    return <RowDataWrapper>
                <img src="https://i.pinimg.com/564x/05/d1/94/05d1948a0b051439f26a835c33b79823.jpg" alt="profile" className="rounded-full w-[40px] h-[40px]" />
                <div className="flex flex-col">
                    <p className="font-bold text-slate-900">{name}</p>
                    <p className="text-gray-500">+{phoneNumber.split('-').join(' ')}</p>
                </div>
            </RowDataWrapper>
}

export default Patient;