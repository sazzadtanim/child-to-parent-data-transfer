export default function ChildComponent({ transferData }) {
  return (
    <div className='max-w-fit sm:p-10 ring-4 ring-green-500 sm:prose-xs'>
      <p>this is the child component inside green border</p>
      <input
        type='text'
        placeholder='write here..'
        onChange={e => transferData(e.target.value)}
        className='ring-1'
      />
    </div>
  )
}

//In child component, input of the transferData function is the output of the transferData function in parent componet

//In child component:
// 1) set a transferData function on prop
// 2) put childData as the input of the transferData function
