import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <br />
      <div className="flex flex-wrap gap-4">
        <Button title="Rounded SM" size="medium" shape="rounded-sm" />
        <Button title="Rounded MD" size="medium" shape="rounded-md" />
        <Button title="Rounded Full" size="medium" shape="rounded-full" />
        <Button title="Rounded LG" size="medium" shape="rounded-lg" />
      </div>
    </div>
  )
}
export default Landing