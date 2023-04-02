import mock from "./mock";

import { Customer, CustomerStats } from "@/types/customers";

interface Data {
  statistics: {
    [key: string]: CustomerStats;
  };
  customers: Customer[];
}

const data: Data = {
  statistics: {
    totalCustomers: {
      trendStat: 20,
      trendDir: "up",
      stats: "10,905,451",
      title: "Total Customers",
    },
    members: {
      trendStat: 15,
      title: "Members",
      stats: "100,684",
      trendDir: "up",
    },
    activeNow: {
      trendStat: 50,
      stats: "1,210",
      trendDir: "down",
      title: "Active Now",
    },
  },
  customers: [
    {
      id: 624977,
      name: "Man McFade",
      email: "mmcfade0@creativecommons.org",
      plan: "premium",
      date: "03/06/2022",
      amount: 8667.3,
      avatar: "avatar-1.png",
    },
    {
      id: 871755,
      name: "Maisie Poleykett",
      email: "mpoleykett1@japanpost.jp",
      plan: "premium",
      date: "04/08/2022",
      amount: 5098.24,
      avatar: "avatar-8.png",
    },
    {
      id: 359052,
      name: "Kort Kinvan",
      email: "kkinvan2@washingtonpost.com",
      plan: "basic",
      date: "16/01/2023",
      amount: 4872.79,
      avatar: "avatar-2.png",
    },
    {
      id: 916068,
      name: "Christi Riby",
      email: "criby3@wikispaces.com",
      plan: "premium",
      date: "08/05/2022",
      amount: 8894.38,
      avatar: "avatar-6.png",
    },
    {
      id: 799602,
      name: "Dunn Peto",
      email: "dpeto4@disqus.com",
      plan: "basic",
      date: "27/04/2022",
      amount: 7674.74,
      avatar: "avatar-10.png",
    },
    {
      id: 694460,
      name: "Leyla Braybrooke",
      email: "lbraybrooke5@theglobeandmail.com",
      plan: "basic",
      date: "06/11/2022",
      amount: 5092.73,
      avatar: "avatar-6.png",
    },
    {
      id: 248401,
      name: "Constance Gaul",
      email: "cgaul6@china.com.cn",
      plan: "basic",
      date: "17/02/2023",
      amount: 4271.97,
      avatar: "avatar-8.png",
    },
    {
      id: 431070,
      name: "Porty Whightman",
      email: "pwhightman7@yelp.com",
      plan: "premium",
      date: "11/05/2022",
      amount: 5616.67,
      avatar: "avatar-5.png",
    },
    {
      id: 473203,
      name: "Nelson Durman",
      email: "ndurman8@webnode.com",
      plan: "basic",
      date: "15/05/2022",
      amount: 9003.65,
      avatar: "avatar-7.png",
    },
    {
      id: 745101,
      name: "Dion Werndly",
      email: "dwerndly9@unesco.org",
      plan: "basic",
      date: "31/12/2022",
      amount: 5273.02,
      avatar: "avatar-7.png",
    },
    {
      id: 514304,
      name: "Wheeler Chandlar",
      email: "wchandlara@apple.com",
      plan: "premium",
      date: "12/02/2023",
      amount: 9988.52,
      avatar: "avatar-4.png",
    },
    {
      id: 357256,
      name: "Teddy Searchwell",
      email: "tsearchwellb@blogger.com",
      plan: "premium",
      date: "09/01/2023",
      amount: 7533.52,
      avatar: "avatar-5.png",
    },
    {
      id: 545337,
      name: "Clea Brewin",
      email: "cbrewinc@themeforest.net",
      plan: "basic",
      date: "28/07/2022",
      amount: 6645.86,
      avatar: "avatar-7.png",
    },
    {
      id: 197932,
      name: "Marv Haslen",
      email: "mhaslend@thetimes.co.uk",
      plan: "basic",
      date: "11/03/2023",
      amount: 2069.01,
      avatar: "avatar-9.png",
    },
    {
      id: 394742,
      name: "Erinna Seekings",
      email: "eseekingse@gov.uk",
      plan: "premium",
      date: "02/02/2023",
      amount: 4155.48,
      avatar: "avatar-8.png",
    },
    {
      id: 741908,
      name: "Ava Gaw",
      email: "agawf@blogs.com",
      plan: "premium",
      date: "21/09/2022",
      amount: 4538.17,
      avatar: "avatar-1.png",
    },
    {
      id: 233933,
      name: "Hadria Rees",
      email: "hreesg@sphinn.com",
      plan: "premium",
      date: "01/03/2023",
      amount: 7135.03,
      avatar: "avatar-3.png",
    },
    {
      id: 369805,
      name: "Cheryl Erley",
      email: "cerleyh@hibu.com",
      plan: "premium",
      date: "27/09/2022",
      amount: 7739.8,
      avatar: "avatar-8.png",
    },
    {
      id: 558610,
      name: "Cyril Riccard",
      email: "criccardi@google.de",
      plan: "basic",
      date: "26/02/2023",
      amount: 1736.18,
      avatar: "avatar-8.png",
    },
    {
      id: 201835,
      name: "Luci Surphliss",
      email: "lsurphlissj@merriam-webster.com",
      plan: "basic",
      date: "31/03/2022",
      amount: 7940.19,
      avatar: "avatar-6.png",
    },
    {
      id: 692497,
      name: "Ilario Eustice",
      email: "ieusticek@hao123.com",
      plan: "basic",
      date: "27/12/2022",
      amount: 4875.64,
      avatar: "avatar-6.png",
    },
    {
      id: 163974,
      name: "Amabel Breedy",
      email: "abreedyl@multiply.com",
      plan: "premium",
      date: "03/07/2022",
      amount: 6172.33,
      avatar: "avatar-8.png",
    },
    {
      id: 267260,
      name: "Virgilio Walicki",
      email: "vwalickim@digg.com",
      plan: "basic",
      date: "02/02/2023",
      amount: 4057.73,
      avatar: "avatar-10.png",
    },
    {
      id: 448468,
      name: "Alvera Mander",
      email: "amandern@hugedomains.com",
      plan: "premium",
      date: "08/11/2022",
      amount: 8924.11,
      avatar: "avatar-5.png",
    },
    {
      id: 393482,
      name: "John Dallas",
      email: "jdallaso@jiathis.com",
      plan: "premium",
      date: "15/11/2022",
      amount: 5950.89,
      avatar: "avatar-9.png",
    },
    {
      id: 865550,
      name: "Etheline Letford",
      email: "eletfordp@dagondesign.com",
      plan: "premium",
      date: "10/01/2023",
      amount: 6056.02,
      avatar: "avatar-3.png",
    },
    {
      id: 667521,
      name: "Rodd Kiddie",
      email: "rkiddieq@businessweek.com",
      plan: "premium",
      date: "01/01/2023",
      amount: 3221.3,
      avatar: "avatar-5.png",
    },
    {
      id: 441304,
      name: "Tracie Cornewell",
      email: "tcornewellr@discuz.net",
      plan: "premium",
      date: "18/01/2023",
      amount: 8488.59,
      avatar: "avatar-5.png",
    },
    {
      id: 588409,
      name: "Allyson Dronsfield",
      email: "adronsfields@blogtalkradio.com",
      plan: "basic",
      date: "04/10/2022",
      amount: 2610.83,
      avatar: "avatar-9.png",
    },
    {
      id: 885329,
      name: "Callean Dallmann",
      email: "cdallmannt@amazon.co.uk",
      plan: "basic",
      date: "22/02/2023",
      amount: 8603.56,
      avatar: "avatar-8.png",
    },
    {
      id: 377305,
      name: "Clarence Jimenez",
      email: "cjimenezu@narod.ru",
      plan: "basic",
      date: "04/03/2023",
      amount: 2224.54,
      avatar: "avatar-5.png",
    },
    {
      id: 149849,
      name: "Gal Woolf",
      email: "gwoolfv@prweb.com",
      plan: "premium",
      date: "31/03/2022",
      amount: 8371.61,
      avatar: "avatar-7.png",
    },
    {
      id: 796890,
      name: "Lindsy Wyd",
      email: "lwydw@linkedin.com",
      plan: "basic",
      date: "24/02/2023",
      amount: 8239.22,
      avatar: "avatar-6.png",
    },
    {
      id: 947370,
      name: "Jerome Wallsam",
      email: "jwallsamx@e-recht24.de",
      plan: "premium",
      date: "22/01/2023",
      amount: 2425.23,
      avatar: "avatar-9.png",
    },
    {
      id: 514058,
      name: "Mort Pepys",
      email: "mpepysy@lycos.com",
      plan: "premium",
      date: "07/02/2023",
      amount: 9234.47,
      avatar: "avatar-1.png",
    },
    {
      id: 263067,
      name: "Dawna Ceney",
      email: "dceneyz@cloudflare.com",
      plan: "premium",
      date: "07/09/2022",
      amount: 9899.86,
      avatar: "avatar-3.png",
    },
    {
      id: 954546,
      name: "Berenice Wessell",
      email: "bwessell10@mac.com",
      plan: "basic",
      date: "23/01/2023",
      amount: 4972.89,
      avatar: "avatar-5.png",
    },
    {
      id: 211532,
      name: "Gretchen Bolger",
      email: "gbolger11@oaic.gov.au",
      plan: "basic",
      date: "22/07/2022",
      amount: 9966.57,
      avatar: "avatar-2.png",
    },
    {
      id: 545103,
      name: "Mal Larman",
      email: "mlarman12@yahoo.com",
      plan: "premium",
      date: "20/10/2022",
      amount: 1784.95,
      avatar: "avatar-1.png",
    },
    {
      id: 633126,
      name: "Joscelin Croci",
      email: "jcroci13@moonfruit.com",
      plan: "basic",
      date: "03/01/2023",
      amount: 3078.02,
      avatar: "avatar-6.png",
    },
    {
      id: 858889,
      name: "Lula Foy",
      email: "lfoy14@people.com.cn",
      plan: "basic",
      date: "13/01/2023",
      amount: 9072.43,
      avatar: "avatar-10.png",
    },
    {
      id: 410988,
      name: "Cherri Cahani",
      email: "ccahani15@cbslocal.com",
      plan: "premium",
      date: "05/05/2022",
      amount: 4275.21,
      avatar: "avatar-3.png",
    },
    {
      id: 540319,
      name: "Marylinda Nani",
      email: "mnani16@indiatimes.com",
      plan: "basic",
      date: "02/05/2022",
      amount: 3247.34,
      avatar: "avatar-1.png",
    },
    {
      id: 514054,
      name: "Tracey Maylott",
      email: "tmaylott17@soup.io",
      plan: "premium",
      date: "18/05/2022",
      amount: 3613.49,
      avatar: "avatar-6.png",
    },
    {
      id: 395556,
      name: "Jolie Osmint",
      email: "josmint18@whitehouse.gov",
      plan: "premium",
      date: "29/10/2022",
      amount: 9177.25,
      avatar: "avatar-1.png",
    },
    {
      id: 767909,
      name: "Decca Bryett",
      email: "dbryett19@4shared.com",
      plan: "premium",
      date: "10/01/2023",
      amount: 4915.59,
      avatar: "avatar-5.png",
    },
    {
      id: 691619,
      name: "Casie Breen",
      email: "cbreen1a@1688.com",
      plan: "premium",
      date: "16/01/2023",
      amount: 6115.95,
      avatar: "avatar-3.png",
    },
    {
      id: 489598,
      name: "Lauree Whordley",
      email: "lwhordley1b@mlb.com",
      plan: "premium",
      date: "31/08/2022",
      amount: 1348.16,
      avatar: "avatar-9.png",
    },
    {
      id: 442628,
      name: "Zara Schott",
      email: "zschott1c@mac.com",
      plan: "premium",
      date: "10/05/2022",
      amount: 3241.41,
      avatar: "avatar-6.png",
    },
    {
      id: 529280,
      name: "Cherianne Philip",
      email: "cphilip1d@whitehouse.gov",
      plan: "premium",
      date: "09/04/2022",
      amount: 2674.04,
      avatar: "avatar-9.png",
    },
  ],
};

mock.onGet("/api/customers-stats").reply(() => [200, data.statistics]);

mock.onGet("/api/customers").reply((config) => {
  const { q = "" } = config.params ?? "";

  const queryLowered = q.toLowerCase();

  const filteredData = data.customers.filter(
    (cus) =>
      cus.name.toLowerCase().includes(queryLowered) ||
      cus.id.toString().toLowerCase().includes(queryLowered) ||
      cus.plan.toLowerCase().includes(queryLowered) ||
      (cus.email.toLowerCase().includes(queryLowered) &&
        cus.date.toLowerCase().includes(queryLowered) &&
        cus.amount.toString().includes(queryLowered))
  );

  return [
    200,
    {
      data: filteredData,
      params: config.params,
    },
  ];
});

mock.onDelete("/api/customers/delete").reply((config) => {
  const customerId = config.data;

  const customerIndex = data.customers.findIndex((t) => t.id === customerId);
  data.customers.splice(customerIndex, 1);

  return [200];
});

mock.onPost("/api/customers/add").reply((config) => {
  const customer = JSON.parse(config.data).data;

  const lastId = Math.max(...data.customers.map((u) => u.id), 0);

  customer.id = lastId + 1;

  const avatar = `avatar-${Math.floor(Math.random() * 10 + 1)}.png`;
  const date = new Date().toLocaleDateString("en-GB");

  data.customers.unshift({ ...customer, avatar, date });

  return [201, { customer }];
});
