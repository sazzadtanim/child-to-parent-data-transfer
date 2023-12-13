import { useState } from 'react'
import ChildComponent from '../components/ChildComponent'

export default function Home() {
  const [rcvChildData, setChildData] = useState('')
  return (
    <div className='container prose prose-slate mx-auto grid items-center justify-center p-2 lg:pt-20'>
      <h1 className='capitalize'>
        transfer data from child to Parent Component
      </h1>

      <ChildComponent
        transferData={(childData: string) => setChildData(childData)}
      />

      <p className='p-10 ring-4'>
        Child data received in Parent:
        <span className='h-4 w-20 text-lg font-bold ring-2'>
          {' '}
          {rcvChildData}
        </span>
      </p>

      <div className='overflow-scroll'>
        <ol>
          <li>
            <h2> In child component send data inside transferFunction</h2>
            <pre>{`export default function Child({ transferFunction }) {
    transferFunction(DATA)
    return <div ></div>
  )
}`}</pre>
          </li>
          <li>
            <h2> In parent get the data using callback function</h2>
            <pre>{`export default function Parent() { 
   return <div >
   <Child transferFunction={DATA=>ReceiveData(DATA)}/>
   </div>
)
}`}</pre>
          </li>
        </ol>
      </div>
    </div>
  )
}
