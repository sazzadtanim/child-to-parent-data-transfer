export default function ChildComponent({ transferData }) {
  return (
    <div className='p-2 ring-4 ring-[oklch(80%_0.2_350)] lg:p-12'>
      <p className='first-letter:capitalize'>
        this is the child component inside pink border
      </p>
      <input
        type='text'
        placeholder='write here..'
        onChange={e => transferData(e.target.value)}
        className='p-2 ring-1'
      />
    </div>
  )
}
