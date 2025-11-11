import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <br />
      <div className="flex flex-wrap gap-4">
        <Button title="Rounded SM" size="medium" shape="rounded-sm" className="bg-white text-black border border-gray-300" />
        <Button title="Rounded MD" size="medium" shape="rounded-md" className="bg-white text-black border border-gray-300" />
        <Button title="Rounded Full" size="medium" shape="rounded-full" className="bg-white text-black border border-gray-300" />
      </div>
    </div>
  )
}
export default Landing