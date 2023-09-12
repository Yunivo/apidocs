function Table({ data }) {
    return (
        <table className="table-fixed relative rounded-xl bg-white dark:bg-emerald-500/5">
            <thead>
            <tr>
                {data[0] && Object.keys(data[0]).map(key => (
                    <th className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-600 text-left text-gray-600 dark:text-gray-400" key={key}>
                        {key}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr className={`${index % 2 === 0 ? 'bg-zinc-100 dark:bg-emerald-500/5 ' : ''} ${index === data.length - 1 ? 'border-b-0' : ''}`} key={index}>
                    {Object.values(row).map((cell, idx) => (
                        <td className={`py-2 px-4 ${index !== data.length - 1 ? 'border-b' : ''} bg-zinc-100/40 border-zinc-200 dark:border-zinc-600 dark:text-zinc-400 dark:bg-emerald-500/5`} key={idx}>
                            {cell}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;
