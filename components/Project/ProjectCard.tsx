import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

// 프로젝트를 보여주는 카드 부분
export default function ProjectCard() {
  return (
    <div className="grid grid-cols-1 m-2 gap-4 justify-items-center lg:grid-cols-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Card Title-AFO</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Card Title-Compact</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Card Title-Steamrader</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Card Title-Portfoilo</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
