import { ComponentProps } from "react"

export default function Avatar({name, number, ...props}: {
	name: string
    number: string,
} & ComponentProps<'div'>){

    return (
        <div className="flex items-center gap-2"{...props}>
            <div className="flex items-center rounded-full w-8 h-8 bg-red-300"></div>
            <div>
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-xs text-grayShade-7">{number}</p>
            </div>
        </div>
    )
}

