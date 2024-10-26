
type PropsType = {
    dataSource?: {
        fees: Record<string, number>,
        total: number
    }
}

const formatValue = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value)
}

const feesNames = {
    BasicBuyerFee: 'Basic',
    SpecialFee: 'Special',
    AssociationFee: 'Association',
    StorageFee: 'Storage'
}

const KEY_TOTAL = 'Total'

const Index = (props: PropsType) => {

    if (!props.dataSource) {
        return <div className="flex justify-center items-center w-full h-full text-gray-400">Type a price to display content</div>
    }

    const {
        fees,
        total
    } = props.dataSource

    fees.Total = total

    return (
        <ul role="list" className="divide-y divide-gray-100 border h-full rounded-lg p-4 space-y-12">
            {Object.entries(fees).map(([fee, value]) => (
                <li key={fee} className={`flex justify-between gap-x-6 py-5 px-2 rounded-lg ${fee === KEY_TOTAL && 'bg-gray-100'}`}>
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{feesNames[fee as keyof typeof feesNames] ?? fee}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{formatValue(value)}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Index