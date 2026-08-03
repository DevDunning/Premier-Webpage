export type StoreHour = {
  days: string;
  hours: string;
};

export type ShowroomLocation = {
  name: string;
  shortName: string;
  phone: string;
  phoneDisplay: string;
  maps: string;
  address: string;
  hours: StoreHour[];
};

export const locations: {
  mckenzie: ShowroomLocation;
  unionCity: ShowroomLocation;
  social: {
    facebook: string;
    googleBusiness: string;
  };
} = {
  mckenzie: {
    name: "McKenzie Showroom",
    shortName: "McKenzie",
    phone: "tel:+17313527591",
    phoneDisplay: "(731) 352-7591",
    maps: "https://maps.app.goo.gl/gFD5TbrXmpPdkAKU9",
    address: "26 Broadway Street, McKenzie, TN 38201",
    hours: [
      { days: "Monday–Tuesday", hours: "10:00 AM–5:00 PM" },
      { days: "Wednesday", hours: "10:00 AM–4:00 PM" },
      { days: "Thursday–Friday", hours: "10:00 AM–5:00 PM" },
      { days: "Saturday", hours: "10:00 AM–4:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
  },

  unionCity: {
    name: "Union City Showroom",
    shortName: "Union City",
    phone: "tel:+17318855777",
    phoneDisplay: "(731) 885-5777",
    maps: "https://maps.app.goo.gl/LwRo3MbsjddsmVTS7",
    address: "1752 West Reelfoot Avenue, Union City, TN 38261",
    hours: [
      { days: "Monday–Friday", hours: "10:00 AM–5:00 PM" },
      { days: "Saturday", hours: "10:00 AM–4:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
  },

  social: {
    facebook: "https://www.facebook.com/premierfurnitureuc",
    googleBusiness: "https://maps.app.goo.gl/n2hLVLsnWWR6dn8R9",
  },
};