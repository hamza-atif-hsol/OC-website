import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Partners data from "Partnering with best-in-class organizations" section on homepage
    const partnersData = [
      // {
      //   id: 1,
      //   name: "Salesforce",
      //   description: "Leading CRM and cloud platform solutions",
      //   href: "/partners/salesforce",
      // },
      {
        id: 2,
        name: "BlackRock",
        description: "Global asset management and risk solutions",
        href: "/partners/blackrock",
      },
      {
        id: 3,
        name: "Standard Chartered",
        description: "International banking partner",
        href: "/partners/standard-chartered",
      },
      {
        id: 4,
        name: "FSI",
        description: "Financial services innovation partner",
        href: "/partners/fsi",
      },
      {
        id: 5,
        name: "MezFi",
        description: "Fintech and digital transformation",
        href: "/partners/mezfi",
      },
      // {
      //   id: 6,
      //   name: "Jumio",
      //   description: "Identity verification and mobile solutions",
      //   href: "/partners/jumio",
      // },
      // {
      //   id: 7,
      //   name: "Moody's",
      //   description: "Credit ratings and risk analytics",
      //   href: "/partners/moodys",
      // },
      // {
      //   id: 8,
      //   name: "LexisNexis",
      //   description: "Data, analytics and compliance solutions",
      //   href: "/partners/lexisnexis",
      // },
    ]

    return NextResponse.json(partnersData)
  } catch (error) {
    console.error("Error fetching partners:", error)
    return NextResponse.json(
      { error: "Failed to fetch partners" },
      { status: 500 }
    )
  }
}
