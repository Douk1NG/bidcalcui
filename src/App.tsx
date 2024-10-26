import { useRef, useState } from "react"
import Form from "./components/form"
import Table from "./components/table"
import { useDebouncedCallback } from "use-debounce";

function App() {

  const [dataSource, setDataSource] = useState();

  const inputRef = useRef<HTMLInputElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)

  const getDataSource = async (params: string) => {
    return await fetch(`${import.meta.env.VITE_MAIN_SERVICE}/api/bid?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  const formatPrice = (price?: string): number => {
    if (!price) return 0
    return parseFloat(price.replace(/[^0-9.-]+/g, ""))
  }

  const handleOnChange = useDebouncedCallback(async () => {
    const params = new URLSearchParams({
      price: `${formatPrice(inputRef.current?.value)}`,
      type: `${selectRef.current?.value}`
    })

    const response = await getDataSource(params.toString()).then(res => res.json())
    setDataSource(response.result)
  }, 200)

  return (
    <main className="flex flex-col md:flex-row rounded-lg border bg-card text-card-foreground shadow-sm w-full gap-2 p-6">
      <section className="w-1/2">
        <Form
          currencyInputRef={inputRef}
          selectRef={selectRef}
          handleOnChange={handleOnChange}
        />
      </section>
      <section className="w-1/2">
        <Table
          dataSource={dataSource}
        />
      </section>
    </main>
  )
}

export default App
