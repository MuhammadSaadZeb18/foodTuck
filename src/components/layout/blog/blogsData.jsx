import blog1 from "../../../assets/blog/blog1.png";
import blog2 from "../../../assets/blog/blog2.png";
import blog3 from "../../../assets/blog/blog3.png";
import aut1 from "../../layout/../../assets/icons/user1.png";
import aut2 from "../../layout/../../assets/icons/user2.avif";
import aut3 from "../../layout/../../assets/icons/user3.avif";
export const blogs = [
  {
    id: "b1",
    img: blog1,
    title: "Simple coffee Recipes for Next Spring !",
    aut: "saad",
    productDetail: {
      title: "Simple coffee Recipes for Next Spring !",
      content: [
        {
          type: "paragraph",
          text: "A digital detox is all about stepping back from your devices and focusing on real-life interactions...",
        },
        {
          type: "image",
          src: blog1,
          caption: "Taking time away from screens helps mental health.",
        },
        {
          type: "paragraph",
          text: "It helps you recharge mentally, sleep better, and reduce stress caused by constant notifications...",
        },
        {
          type: "quote",
          text: "Almost everything will work again if you unplug it for a few minutes… including you.",
        },
      ],
      author: {
        name: "Admin",
        role: "Content Writer",
        img: aut1,
        bio: "Passionate about wellness, lifestyle, and helping people find balance in their lives.",
      },
      related: [
        {
          id: "b2",
          title: "5 Morning Routines for a Productive Day",
          img: blog2,
        },
        { id: "b3", title: "Why You Should Try Minimalism", img: blog3 },
      ],
      comments: [
        {
          id: 1,
          name: "Sarah",
          text: "This was so inspiring! I need to try a detox soon.",
        },
        {
          id: 2,
          name: "John",
          text: "I agree, too much screen time drains me. Great tips!",
        },
      ],
    },
  },
  {
    id: "b2",
    img: blog2,
    title: "10 Reasons To Do A Digital Detox Challenge!",
    aut: "talha",
    productDetail: {
      title: "10 Reasons To Do A Digital Detox Challenge!",
      content: [
        {
          type: "paragraph",
          text: "Detoxing from screens gives you peace of mind and reduces stress...",
        },
        { type: "image", src: blog2, caption: "Switch off to recharge." },
      ],
      author: {
        name: "Admin",
        role: "Police Man",
        img: aut2,
        bio: "Focused on balance and digital well-being.",
      },
      related: [
        { id: "b1", title: "Coffee Recipes for Spring", img: blog1 },
        { id: "b3", title: "Why You Should Try Minimalism", img: blog3 },
      ],
      comments: [
        {
          id: 1,
          name: "Ali",
          text: "This hit me hard. Going offline this weekend!",
        },
      ],
    },
  },
  {
    id: "b3",
    img: blog3,
    title: "Traditional Soft Pretzels with Sweet Beer Cheese!",
    aut: "uzair",
    productDetail: {
      title: "Traditional Soft Pretzels with Sweet Beer Cheese!",
      content: [
        {
          type: "paragraph",
          text: "Classic pretzels are soft, salty, and perfect with beer cheese...",
        },
        {
          type: "image",
          src: blog3,
          caption: "Golden pretzels fresh from the oven.",
        },
      ],
      author: {
        name: "Admin",
        role: "Content Writer",
        img: aut3,
        bio: "Food lover, sharing recipes that make people happy.",
      },
      related: [
        { id: "b1", title: "Coffee Recipes", img: blog1 },
        { id: "b2", title: "Digital Detox", img: blog2 },
      ],
      comments: [
        { id: 1, name: "Maria", text: "Yum! Definitely trying this!" },
      ],
    },
  },
  {
    id: "b1",
    img: blog1,
    title: "Simple coffee Recipes for Next Spring !",
    aut: "saad",
    productDetail: {
      title: "Simple coffee Recipes for Next Spring !",
      content: [
        {
          type: "paragraph",
          text: "A digital detox is all about stepping back from your devices and focusing on real-life interactions...",
        },
        {
          type: "image",
          src: blog1,
          caption: "Taking time away from screens helps mental health.",
        },
        {
          type: "paragraph",
          text: "It helps you recharge mentally, sleep better, and reduce stress caused by constant notifications...",
        },
        {
          type: "quote",
          text: "Almost everything will work again if you unplug it for a few minutes… including you.",
        },
      ],
      author: {
        name: "Admin",
        role: "Content Writer",
        img: aut1,
        bio: "Passionate about wellness, lifestyle, and helping people find balance in their lives.",
      },
      related: [
        {
          id: "b2",
          title: "5 Morning Routines for a Productive Day",
          img: blog2,
        },
        { id: "b3", title: "Why You Should Try Minimalism", img: blog3 },
      ],
      comments: [
        {
          id: 1,
          name: "Sarah",
          text: "This was so inspiring! I need to try a detox soon.",
        },
        {
          id: 2,
          name: "John",
          text: "I agree, too much screen time drains me. Great tips!",
        },
      ],
    },
  },
  {
    id: "b2",
    img: blog2,
    title: "10 Reasons To Do A Digital Detox Challenge!",
    aut: "talha",
    productDetail: {
      title: "10 Reasons To Do A Digital Detox Challenge!",
      content: [
        {
          type: "paragraph",
          text: "Detoxing from screens gives you peace of mind and reduces stress...",
        },
        { type: "image", src: blog2, caption: "Switch off to recharge." },
      ],
      author: {
        name: "Admin",
        role: "Police Man",
        img: aut2,
        bio: "Focused on balance and digital well-being.",
      },
      related: [
        { id: "b1", title: "Coffee Recipes for Spring", img: blog1 },
        { id: "b3", title: "Why You Should Try Minimalism", img: blog3 },
      ],
      comments: [
        {
          id: 1,
          name: "Ali",
          text: "This hit me hard. Going offline this weekend!",
        },
      ],
    },
  },
];
