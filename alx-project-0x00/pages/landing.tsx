import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <br />
      <Button title="Click me" size="medium" shape="rounded-md" className="" />
    </div>
  )
}
export default Landing