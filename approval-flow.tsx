"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, XCircle, Clock, User, Building2, Briefcase, Calendar, DollarSign, FileText } from "lucide-react"

interface ApprovalRequest {
  id: string
  customerName: string
  customerType: "individual" | "corporate" | "business"
  status: "pending" | "approved" | "rejected" | "under_review"
  requestType: string
  amount?: string
  submittedDate: string
  priority: "high" | "medium" | "low"
  avatar?: string
  description: string
}

const mockRequests: ApprovalRequest[] = [
  {
    id: "1",
    customerName: "John Smith",
    customerType: "individual",
    status: "pending",
    requestType: "Account Opening",
    amount: "$50,000",
    submittedDate: "2024-01-15",
    priority: "high",
    description: "Individual savings account with initial deposit",
  },
  {
    id: "2",
    customerName: "TechCorp Inc.",
    customerType: "corporate",
    status: "under_review",
    requestType: "Credit Line Increase",
    amount: "$500,000",
    submittedDate: "2024-01-14",
    priority: "high",
    description: "Corporate credit line expansion for Q1 operations",
  },
  {
    id: "3",
    customerName: "Sarah Johnson",
    customerType: "individual",
    status: "approved",
    requestType: "Loan Application",
    amount: "$25,000",
    submittedDate: "2024-01-13",
    priority: "medium",
    description: "Personal loan for home renovation",
  },
  {
    id: "4",
    customerName: "Global Solutions Ltd",
    customerType: "corporate",
    status: "rejected",
    requestType: "Investment Account",
    amount: "$1,000,000",
    submittedDate: "2024-01-12",
    priority: "high",
    description: "Corporate investment portfolio setup",
  },
  {
    id: "5",
    customerName: "Mike's Bakery",
    customerType: "business",
    status: "pending",
    requestType: "Business Loan",
    amount: "$75,000",
    submittedDate: "2024-01-11",
    priority: "medium",
    description: "Small business expansion loan",
  },
  {
    id: "6",
    customerName: "Emma Wilson",
    customerType: "individual",
    status: "under_review",
    requestType: "Mortgage Application",
    amount: "$350,000",
    submittedDate: "2024-01-10",
    priority: "high",
    description: "First-time home buyer mortgage",
  },
]

export default function Component() {
  const [selectedTab, setSelectedTab] = useState("all")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "under_review":
        return <Clock className="h-4 w-4 text-yellow-500" />
      default:
        return <Clock className="h-4 w-4 text-blue-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: "default",
      approved: "default",
      rejected: "destructive",
      under_review: "secondary",
    } as const

    const colors = {
      pending: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      approved: "bg-green-100 text-green-800 hover:bg-green-100",
      rejected: "bg-red-100 text-red-800 hover:bg-red-100",
      under_review: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    } as const

    return <Badge className={colors[status as keyof typeof colors]}>{status.replace("_", " ").toUpperCase()}</Badge>
  }

  const getCustomerIcon = (type: string) => {
    switch (type) {
      case "individual":
        return <User className="h-4 w-4" />
      case "corporate":
        return <Building2 className="h-4 w-4" />
      case "business":
        return <Briefcase className="h-4 w-4" />
      default:
        return <User className="h-4 w-4" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500"
      case "medium":
        return "border-l-yellow-500"
      case "low":
        return "border-l-green-500"
      default:
        return "border-l-gray-500"
    }
  }

  const filteredRequests =
    selectedTab === "all" ? mockRequests : mockRequests.filter((request) => request.customerType === selectedTab)

  const handleApprove = (id: string) => {
    console.log("Approving request:", id)
  }

  const handleReject = (id: string) => {
    console.log("Rejecting request:", id)
  }

  const handleReview = (id: string) => {
    console.log("Starting review for request:", id)
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Approval Flow Dashboard</h1>
        <p className="text-muted-foreground">Manage approval requests across different customer types</p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Requests</TabsTrigger>
          <TabsTrigger value="individual">Individual</TabsTrigger>
          <TabsTrigger value="corporate">Corporate</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="space-y-4">
          <div className="grid gap-4">
            {filteredRequests.map((request) => (
              <Card key={request.id} className={`border-l-4 ${getPriorityColor(request.priority)}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={request.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {request.customerName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{request.customerName}</CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          {getCustomerIcon(request.customerType)}
                          <span className="capitalize">{request.customerType}</span>
                          <span>•</span>
                          <span className="capitalize">{request.priority} Priority</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(request.status)}
                      {getStatusBadge(request.status)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Request Type:</span>
                      <span>{request.requestType}</span>
                    </div>
                    {request.amount && (
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Amount:</span>
                        <span>{request.amount}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Submitted:</span>
                      <span>{new Date(request.submittedDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-sm text-muted-foreground">{request.description}</p>
                  </div>

                  <div className="flex justify-end space-x-2">
                    {request.status === "pending" && (
                      <>
                        <Button variant="outline" size="sm" onClick={() => handleReview(request.id)}>
                          Start Review
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleReject(request.id)}>
                          Reject
                        </Button>
                        <Button size="sm" onClick={() => handleApprove(request.id)}>
                          Approve
                        </Button>
                      </>
                    )}
                    {request.status === "under_review" && (
                      <>
                        <Button variant="outline" size="sm" onClick={() => handleReject(request.id)}>
                          Reject
                        </Button>
                        <Button size="sm" onClick={() => handleApprove(request.id)}>
                          Approve
                        </Button>
                      </>
                    )}
                    {(request.status === "approved" || request.status === "rejected") && (
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
