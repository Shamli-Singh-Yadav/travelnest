const sampleListings = [
  {
    title: "Hilltop Sunrise Cottage",
    description:
      "Wake up to golden sunrises and cool mountain air in this peaceful hilltop cottage, perfect for slow mornings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Mussoorie",
    country: "India",
  },
  {
    title: "Urban Glass Studio",
    description:
      "A sleek glass-walled studio apartment surrounded by city lights, cafés, and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Bangalore",
    country: "India",
  },
  {
    title: "Forest Hideaway Cabin",
    description:
      "A quiet wooden cabin deep in the forest where birdsong replaces alarms and peace comes naturally.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Royal Heritage Haveli",
    description:
      "Stay in a beautifully preserved haveli that reflects royal architecture and timeless elegance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Rainforest Tree Stay",
    description:
      "An elevated treehouse surrounded by lush rainforest and misty mornings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Sea Breeze Villa",
    description:
      "Feel the ocean breeze all day long from this open and airy seaside villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Lakeside Wooden Home",
    description:
      "A cozy wooden house by the lake, ideal for evening walks and calm reflections.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Nainital",
    country: "India",
  },
  {
    title: "Skyline Luxury Suite",
    description:
      "A premium suite with panoramic skyline views and modern interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Snow Valley Chalet",
    description:
      "A warm wooden chalet surrounded by snow-capped peaks and winter magic.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Gulmarg",
    country: "India",
  },
  {
    title: "Wildlife Jungle Lodge",
    description:
      "Experience nature up close in a jungle lodge surrounded by wildlife and silence.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Ranthambore",
    country: "India",
  },
  {
  title: "Desert Heritage Camp",
  description:
    "Experience royal desert living with traditional tents, folk music, and starry nights.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Jaisalmer",
  country: "India",
},
{
  title: "Backwater Serenity Villa",
  description:
    "A calm waterfront villa surrounded by coconut palms and peaceful backwaters.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=60",
  },
  price: 2200,
  location: "Alleppey",
  country: "India",
},
{
  title: "Tea Estate Bungalow",
  description:
    "Stay amidst lush tea gardens with misty mornings and colonial charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1627893953652-5c2b2f3c2d7b?auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Munnar",
  country: "India",
},
{
  title: "Himalayan Stone Cottage",
  description:
    "A handcrafted stone cottage offering silence, snow views, and fresh mountain air.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1600411832196-5e7f3d50f0c3?auto=format&fit=crop&w=800&q=60",
  },
  price: 1400,
  location: "Kalpa",
  country: "India",
},
{
  title: "Cliffside Ocean Retreat",
  description:
    "A dramatic cliffside stay with uninterrupted views of the Arabian Sea.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210b8?auto=format&fit=crop&w=800&q=60",
  },
  price: 2600,
  location: "Varkala",
  country: "India",
},
{
  title: "Royal Palace Stay",
  description:
    "Live like royalty in a palace featuring courtyards, arches, and heritage décor.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=60",
  },
  price: 4200,
  location: "Udaipur",
  country: "India",
},
{
  title: "Riverfront Bamboo Hut",
  description:
    "A minimalist bamboo hut beside a flowing river, perfect for digital detox.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
  },
  price: 900,
  location: "Tirthan Valley",
  country: "India",
},
{
  title: "Colonial Hill Residence",
  description:
    "A British-era hill residence with fireplaces, gardens, and valley views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=60",
  },
  price: 2300,
  location: "Shimla",
  country: "India",
},
{
  title: "Modern Desert Villa",
  description:
    "A luxury villa blending modern design with vast desert landscapes.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
  },
  price: 3800,
  location: "Bikaner",
  country: "India",
},
{
  title: "Sacred River Ashram Stay",
  description:
    "A peaceful ashram-style stay focused on mindfulness, yoga, and river views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
  },
  price: 700,
  location: "Rishikesh",
  country: "India",
},
{
  title: "Coffee Plantation Retreat",
  description:
    "Wake up to the aroma of coffee beans in a quiet plantation retreat.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 1600,
  location: "Chikmagalur",
  country: "India",
},
{
  title: "Snowline Wooden Chalet",
  description:
    "A warm alpine-style chalet nestled close to the snowline.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
  },
  price: 2800,
  location: "Manali",
  country: "India",
},
{
  title: "Artisan Mud House",
  description:
    "A beautifully crafted mud house showcasing sustainable rural architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=60",
  },
  price: 800,
  location: "Kutch",
  country: "India",
},
{
  title: "Lighthouse View Cottage",
  description:
    "A coastal cottage offering stunning views of the sea and nearby lighthouse.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 1900,
  location: "Pondicherry",
  country: "India",
},
{
  title: "Forest Canopy Stay",
  description:
    "Stay above ground level with panoramic views of dense forest canopies.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
  },
  price: 1100,
  location: "Dandeli",
  country: "India",
},
{
  title: "Luxury City Penthouse",
  description:
    "A high-rise penthouse offering luxury interiors and skyline views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
  },
  price: 4500,
  location: "Delhi",
  country: "India",
},
{
  title: "Ancient Stepwell Haveli",
  description:
    "A heritage stay near historic stepwells and old city markets.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
  },
  price: 2100,
  location: "Abhaneri",
  country: "India",
},
{
  title: "Island Beach Hut",
  description:
    "A simple beach hut with turquoise waters and white sand beaches.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 1700,
  location: "Havelock Island",
  country: "India",
},
{
  title: "Valley View Eco Lodge",
  description:
    "An eco-conscious lodge overlooking green valleys and mountain ridges.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 1300,
  location: "Ziro",
  country: "India",
},
{
  title: "Sacred Temple Town Home",
  description:
    "A traditional home stay located near ancient temples and heritage streets.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=60",
  },
  price: 900,
  location: "Madurai",
  country: "India",
}

];

module.exports = { data: sampleListings };
