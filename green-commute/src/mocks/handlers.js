import { rest } from 'msw';

const description =
  'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.';
const aboutCompany =
  'High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.';

const data = {
  jobs: [
    {
      id: '1',
      jobTitle: 'User Experience Designer',
      company: 'HP',
      datePosted: '12 mins ago',
      city: 'Hyderabad',
      location: 'Hyderabad, Telangana, India',
      logo: '/assets/logos/hp.png',
      description: description,
      aboutCompany: aboutCompany,
      details: {
        company: 'HP',
        title: 'User Experience Designer',
        location: 'Hyderabad, Telangana, India',
        companyLogo: '/assets/logos/hp.png',
        postedDate: '36min ago',
        isApplied: false,
        isSaved: false,
      },
    },
    {
      id: '2',
      jobTitle: 'User Experience Designer',
      company: 'Twitter',
      datePosted: '46 mins ago',
      city: 'Mumbai',
      location: 'Mumbai, Maharasthra, India',
      logo: '/assets/logos/twitter.png',
      description: description,
      aboutCompany: aboutCompany,
      details: {
        company: 'Twitter',
        title: 'User Experience Designer',
        location: 'Hyderabad, Telangana, India',
        companyLogo: '/assets/logos/twitter.png',
        postedDate: '46 mins ago',
        isApplied: false,
        isSaved: false,
      },
    },
    {
      id: '3',
      jobTitle: 'User Experience Designer',
      company: 'Myntra',
      datePosted: '12 mins ago',
      location: 'Hyderabad, Telangana, India',
      logo: '/assets/logos/myntra.png',
      description: description,
      aboutCompany: aboutCompany,
      details: {
        company: 'Myntra',
        title: 'User Experience Designer',
        location: 'Hyderabad, Telangana, India',
        companyLogo: '/assets/logos/myntra.png',
        postedDate: '12 mins ago',
        isApplied: false,
        isSaved: false,
      },
    },
    {
      id: '4',
      jobTitle: 'User Experience Designer',
      company: 'Wipro',
      datePosted: '3 days ago',
      city: 'Hyderabad',
      location: 'Hyderabad, Telangana, India',
      logo: '/assets/logos/wipro.png',
      description: description,
      aboutCompany: aboutCompany,
      details: {
        company: 'Wipro',
        title: 'User Experience Designer',
        location: 'Hyderabad, Telangana, India',
        companyLogo: '/assets/logos/wipro.png',
        postedDate: '3days ago',
        isApplied: false,
        isSaved: false,
      },
    },
    {
      id: '5',
      jobTitle: 'User Experience Designer',
      company: 'BMW',
      datePosted: '3 days ago',
      city: 'Hyderabad',
      location: 'Hyderabad, Telangana, India',
      logo: '/assets/logos/bmw.png',
      description: description,
      aboutCompany: aboutCompany,
      details: {
        company: 'BMW',
        title: 'User Experience Designer',
        location: 'Hyderabad, Telangana, India',
        companyLogo: '/assets/logos/bmw.png',
        postedDate: '3days ago',
        isApplied: false,
        isSaved: false,
      },
    },
    {
      id: '6',
      jobTitle: 'Python Developer',
      company: 'Instagram',
      datePosted: '3 days ago',
      city: 'Hyderabad',
      location: 'Hyderabad, Telangana, India',
      logo: '/assets/logos/instagram.png',
      description: description,
      aboutCompany: aboutCompany,
      details: {
        company: 'Instagram',
        title: 'Python Developer',
        location: 'Hyderabad, Telangana, India',
        companyLogo: '/assets/logos/instagram.png',
        postedDate: '3days ago',
        isApplied: false,
        isSaved: false,
      },
    },
  ],
  saved: [
    {
      id: '1',
      jobTitle: 'User Experience Designer',
      company: 'HP',
      datePosted: '12 mins ago',
      city: 'Hyderabad',
      location: 'Hyderabad, Telangana, India',
      logo: '/assets/logos/hp.png',
      description: description,
      aboutCompany: aboutCompany,
      details: {
        company: 'HP',
        title: 'User Experience Designer',
        location: 'Hyderabad, Telangana, India',
        companyLogo: '/assets/logos/hp.png',
        postedDate: '36min ago',
        isApplied: false,
        isSaved: true,
      },
    },
  ],
};

export const handlers = [
  rest.get(`${window.location.origin}/api/jobs`, (req, res, ctx) => {
    return res(ctx.json(data.jobs));
  }),

  rest.get(`${window.location.origin}/api/saved`, (req, res, ctx) => {
    return res(ctx.json(data.saved));
  }),

  rest.get(`${window.location.origin}/api/job`, (req, res, ctx) => {
    const jobId = req.url.searchParams.get('id');
    return res(ctx.json(data.jobs.at(jobId)));
  }),
  rest.post(`${window.location.origin}/api/saved`, (req, res, ctx) => {
    return res(ctx.json(data.saved));
  }),

  rest.patch(`${window.location.origin}/api/job/:id`, (req, res, ctx) => {
    const { id } = req.params;
    data.jobs = data.jobs.map((job) => {
      if (job.id != parseInt(id)) {
        return job;
      }
      return req.body;
    });
    return res(ctx.status(200), ctx.json({ status: 'successfully updated details.' }));
  }),
];
