const blogs = [
  {
    title: "7 ways to maximize your cloud security",
    content: "Content",
    link: "/perspectives/7-ways-to-maximize-your-cloud-security",
  },
  {
    title: "Boost your enterprise innovation with robotic process automation",
    content: "Content",
    link: "/perspectives/boost-your-enterprise-innovation-with-robotic-process-automation",
  },
  {
    title: "How blockchain redefines business and banking",
    content: "Content",
    link: "/perspectives/how-blockchain-redefines-business-and-banking",
  },
  {
    title:
      "Navigating the cloud landscape: 5 key strategies for effective cloud assessment",
    content: "Content",
    link: "/perspectives/navigating-the-cloud-landscape",
  },
];

const caseStudies = [
  {
    title: "Enhancing patient care with bi and sql analytics at qcentrio",
    content: "Content",
    link: "/case-study/enhancing-patient-care-with-bi-and-sql-analytics",
  },
  {
    title:
      "Transforming pharmaceutical major’s sharepoint ecosystem with azure migration",
    content: "Content",
    link: "/case-study/transforming-pharmaceutical-major-sharepoint-ecosystem-with-azure-migration",
  },
];

export function search(type, item) {
  console.log("item: ");
  console.log(item);
  if (type == "perspectives") {
    if (item != "") {
      const results = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(item.toLowerCase())
      );
      return results;
    } else {
      return blogs;
    }
  } else if (type == "case-study") {
    if (item != "") {
      const results = caseStudies.filter((study) =>
        study.title.toLowerCase().includes(item.toLowerCase())
      );
      return results;
    } else {
      return caseStudies;
    }
  }
}
