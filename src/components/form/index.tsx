import CurrencyInput from 'react-currency-input-field';

type PropsType = {
    currencyInputRef: React.RefObject<HTMLInputElement>,
    selectRef: React.RefObject<HTMLSelectElement>,
    handleOnChange: () => void
}
const Index = (props:PropsType) => {
    return (
        <form className="border h-full rounded-lg p-4">
            <div className="space-y-12">
                <div className="">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Bid Calculator</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Welcome to our bid calculator,
                        please enter the vehicle base price and select a type to get the bid price.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Vehicle base price
                            </label>
                            <div className="mt-2">
                                <CurrencyInput
                                    ref={props.currencyInputRef}
                                    id="price"
                                    name="price"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter the price of the vehicle"
                                    intlConfig={{
                                        locale: 'en-US',
                                        currency: 'USD'
                                    }}
                                    step={0.01}
                                    onChange={props.handleOnChange}
                                    autoFocus={true}
                                    onKeyDown={props.handleOnChange}
                                    onKeyUp={props.handleOnChange}
                                />
                            </div>
                        </div>


                        <div className="sm:col-span-3">
                            <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                                Type
                            </label>
                            <div className="mt-2">
                                <select
                                    ref={props.selectRef}
                                    id="type"
                                    name="type"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    onChange={props.handleOnChange}
                                    defaultValue={''}
                                >
                                    <option disabled>Select a type</option>
                                    <option value='luxury'>Luxury</option>
                                    <option value='common'>Common</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Index