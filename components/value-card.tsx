import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ValueCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-y-0">
        <Icon className="h-6 w-6 mr-4" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}