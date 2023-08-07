import { useState } from 'react'
import ChildComponent from '../components/ChildComponent'

export default function Home() {
  const [rcvChildData, setChildData] = useState('')
  return (
    <div className='prose-xs prose-slate mx-auto grid items-center justify-center bg-white p-2 sm:prose sm:p-10'>
      <div className=''>
        <h1 className=''>transfer data from child to Parent Component</h1>
        <ChildComponent
          transferData={(childData: string) => setChildData(childData)}
        />

        <p className='inline ring-4'>
          Child data received in Parent:{' '}
          <span className='text-lg font-bold'>{rcvChildData}</span>
        </p>

        <div>
          <ol>
            <li>
              In child component set a function (transferData) on prop
              <pre>{`export default function ChildComponent({ transferData }) {  return (
    <div className='max-w-fit p-10 ring-4 ring-green-500 prose'>
      <p>this is the child component inside green border</p>
      <input
        type='text'
        placeholder='write here..'
        onChange={e => transferData(e.target.value)}
        className='ring-1'
      />
    </div>
  )
}`}</pre>
            </li>
            <li>
              Put childData as the input of the transferData function
              <pre>{`onChange={e => transferData(e.target.value)}`}</pre>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
