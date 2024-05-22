
interface Props {
  name: string,
  description?: string,
  image: string
}

export default function Class({name, description='some description', image}: Props) {
  const overlayStyle = `p-5 absolute z-30 flex h-[338px] w-[450px] flex-col items-center justify-center whitespace-nowrap bg-primary-500 text-center
  text-white text-wrap opacity-0 transition duration-500 hover:opacity-90`

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px] ">
      <div className={overlayStyle}>
        <p className="pb-5 text-2xl font-bold">{name}</p>
        <p>{description}</p>
      </div>
      <img src={image} alt={`${image}`}/>
    </li>
  )
}
