const dataset = {
    ts: {
      
      "t-1": { id: "t-1", content: "Content for t 1" },
      "t-2": { id: "t-2", content: "Content for t 2" },
      "t-3": { id: "t-3", content: "Content for t 3" },
      "t-4": { id: "t-4", content: "Content for t 4" },
      "t-5": { id: "t-5", content: "Content for t 5" },
      "t-6": { id: "t-6", content: "Content for t 6" },
      "t-7": { id: "t-7", content: "Content for t 7" },
      "t-8": { id: "t-8", content: "Content for t 8" }
    },
    columns: {
      "column-1": { id: "column-1", title: "Todo", tIds: [ 't-6','t-7','t-8']},
      "column-2": { id: "column-2", title: "In progress", tIds: ['t-4','t-5', 't-3'] },
      "column-3": { id: "column-3", title: "Review", tIds: ['t-2'] },
      "column-4": { id: "column-4", title: "Completed", tIds: ['t-1'] }
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"]}
  export default dataset;