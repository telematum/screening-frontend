const RowDataWrapper = ({children}) => {
    return <td className="px-6 py-3">
                <div className="flex items-center gap-2">
                    {children}
                </div>
            </td>
}

export default RowDataWrapper