// constant.tsx
// constant.tsx
export const sidebarData = [
    {
      title: "DASHBOARD",
      items: [
        { name:"Home", icon: "📋", path: "/"},
        { name: "Orders", icon: "📦", path: "/orderPage" },
        { name: "Tracking", icon: "📍", path: "/trackingPage" },
        { name: "Marketplace", icon: "🛒", path: "/orderPage" },
        { name: "Customers", icon: "👥", path: "/orderPage" },
        { name: "Message", icon: "💬", badge: 2 , path: "/orderPage" },
      ],
    },
    {
      title: "PAYMENT",
      items: [
        { name: "Ledger", icon: "📋" , path: "/orderPage"},
        { name: "Taxes", icon: "💰" , path: "/orderPage"},
        { name: "Payment Methods", icon: "💳" , path: "/orderPage"},
      ],
    },
  ];
  
export const shipmentData = [
    {
      title: "On Going",
      count: 259,
      percentage: 12.4,
      icon: "/Images/dash3.png", // Use actual paths for the icons
      bgColor: "bg-red-100",
      percentageColor: "text-red-500"
    },
    {
      title: "Shipped",
      count: 320,
      percentage: 10.4,
      icon: "/Images/dash1.png",
      bgColor: "",
      percentageColor: "text-purple-500"
    },
    {
      title: "Completed",
      count: 1327,
      percentage: 2.4,
      icon: "/Images/dash2.png",
      bgColor: "bg-green-100",
      percentageColor: "text-green-500"
    }
  ];

export const shippingReportData = [
    {
      id: 1,
      recipient: "Epul Rohman",
      phone: "(485) 813-7***",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
      product: "Book",
      fee: "$3.99",
      avatar: "/Images/avatar.png"
    },
    {
      id: 2,
      recipient: "Riko Sapto Dimo",
      phone: "(982) 625-0***",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
      product: "Electronic",
      fee: "$5.99",
      avatar: "/Images/avatar.png"
    },
    {
      id: 3,
      recipient: "Pandi Atuk Senantiasa",
      phone: "(688) 813-0***",
      status: "On Hold",
      statusColor: "bg-red-100 text-red-700",
      product: "Furniture",
      fee: "$1.99",
      avatar: "/Images/avatar.png"
    },
    {
      id: 4,
      recipient: "Dede Inon",
      phone: "(723) 638-4***",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
      product: "Fashion",
      fee: "$7.99",
      avatar: "/Images/avatar.png"
    },
    {
      id: 5,
      recipient: "Ariq Fikriawan Ramdani",
      phone: "(642) 541-8***",
      status: "Waiting",
      statusColor: "bg-yellow-100 text-yellow-700",
      product: "Book",
      fee: "$2.99",
      avatar: "/Images/avatar.png"
    },
    {
      id: 6,
      recipient: "Nazmi Javier",
      phone: "(370) 924-9***",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
      product: "Food",
      fee: "$0.99",
      avatar: "/Images/avatar.png"
    }
  ];
  
  export const OrderData = [
    {
      id: 1,
      recipient: "Epul Rohman",
      phone: "(485) 813-7***",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
      product: "Book",
      fee: "$3.99",
      avatar: "/Images/avatar.png"
    },
    {
      id: 2,
      recipient: "Riko Sapto Dimo",
      phone: "(982) 625-0***",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
      product: "Electronic",
      fee: "$5.99",
      avatar: "/Images/avatar.png"
    },
    {
      id: 3,
      recipient: "Pandi Atuk Senantiasa",
      phone: "(688) 813-0***",
      status: "On Hold",
      statusColor: "bg-red-100 text-red-700",
      product: "Furniture",
      fee: "$1.99",
      avatar: "/Images/avatar.png"
    },
    {
      id: 4,
      recipient: "Dede Inon",
      phone: "(723) 638-4***",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
      product: "Fashion",
      fee: "$7.99",
      avatar: "/Images/avatar.png"
    },
    {
      id: 5,
      recipient: "Ariq Fikriawan Ramdani",
      phone: "(642) 541-8***",
      status: "Waiting",
      statusColor: "bg-yellow-100 text-yellow-700",
      product: "Book",
      fee: "$2.99",
      avatar: "/Images/avatar.png"
    },
    {
      id: 6,
      recipient: "Nazmi Javier",
      phone: "(370) 924-9***",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
      product: "Food",
      fee: "$0.99",
      avatar: "/Images/avatar.png"
    }
  ];


  export const MostSellingItems = [
    { id: 1, name: "Avocados", quantity: "2 pcs", isChecked: true },
    { id: 2, name: "Salmon fillets", quantity: "2 x 150g", isChecked: true },
    { id: 3, name: "Yogurt", quantity: "200g", isChecked: false, aiSuggested: true },
    { id: 4, name: "Dark chocolate ", quantity: "50g", isChecked: false },
    { id: 5, name: "Red Onion", quantity: "1/4 piece", isChecked: false },
    { id: 6, name: "Lettuce", quantity: "1 piece", isChecked: false },
  ];
  