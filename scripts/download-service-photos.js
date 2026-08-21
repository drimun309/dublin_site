const fs = require("fs");
const path = require("path");
const https = require("https");

const jobs = [
  {
    dir: "public/assets/damp-proofing",
    files: [
      ["damp-1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_2.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_2-225x300.jpeg"],
      ["damp-2.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_6.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_6-225x300.jpeg"],
      ["damp-3.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_4.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_4-225x300.jpeg"],
      ["damp-4.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_5.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_5-225x300.jpeg"],
      ["damp-5.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_3.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_3-225x300.jpeg"],
      ["damp-6.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_1-249x300.jpeg"],
      ["damp-7.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_7.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_7-169x300.jpeg"],
      ["damp-8.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_8.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Damp_Proofing_Rising_Damp_Treatment_Dublin_8-169x300.jpeg"],
    ],
  },
  {
    dir: "public/assets/roofing",
    files: [
      ["roof-1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index1-1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index1-1-225x300.jpg"],
      ["roof-2.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index2-1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index2-1-225x300.jpg"],
      ["roof-3.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index3.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index3-225x300.jpg"],
      ["roof-4.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index4-1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index4-1-225x300.jpg"],
      ["roof-5.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index5-1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index5-1-225x300.jpg"],
      ["roof-6.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index6-1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index6-1-224x300.jpg"],
      ["roof-7.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index7-1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index7-1-218x300.jpg"],
      ["roof-8.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index8.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index8-225x300.jpg"],
      ["chimney-1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Chimne_Repair_Services_Dublin_1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Chimne_Repair_Services_Dublin_1-300x225.jpeg"],
      ["chimney-2.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Chimne_Repair_Services_Dublin_2.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Chimne_Repair_Services_Dublin_2-300x225.jpeg"],
      ["chimney-3.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Chimne_Repair_Services_Dublin_6.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Chimne_Repair_Services_Dublin_6-300x224.jpeg"],
      ["chimney-4.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Chimne_Repair_Services_Dublin_3.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Chimne_Repair_Services_Dublin_3-300x231.jpeg"],
      ["chimney-5.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Chimne_Repair_Services_Dublin_4.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/Chimne_Repair_Services_Dublin_4-300x224.jpeg"],
    ],
  },
  {
    dir: "public/assets/flat-roof",
    files: [
      ["flat-1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index1-2.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index1-2-225x300.jpg"],
      ["flat-2.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index3-1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index3-1-225x300.jpg"],
      ["flat-3.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index4-2.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index4-2-225x300.jpg"],
      ["flat-4.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index5-2.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index5-2-225x300.jpg"],
      ["flat-5.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index6-2.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index6-2-225x300.jpg"],
      ["flat-6.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index7-2.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index7-2-225x300.jpg"],
      ["flat-7.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index8-1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index8-1-225x300.jpg"],
      ["flat-8.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index9-1.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index9-1-225x300.jpg"],
      ["flat-9.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index10.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/08/index10-225x300.jpg"],
      ["flat-10.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/image-1503841235-24930.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/image-1503841235-24930-300x169.jpg"],
      ["flat-11.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/image-1503843200-27955.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/image-1503843200-27955-300x169.jpg"],
      ["flat-12.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/image-1503843816-28836.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/image-1503843816-28836-300x169.jpg"],
      ["flat-13.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/image-1503845461-30877.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/image-1503845461-30877-225x300.jpg"],
      ["flat-14.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/image-1503848731-3437.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/image-1503848731-3437-225x300.jpg"],
      ["flat-15.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/image-1503851391-7297.jpg", "https://repointingdublin.ie/wp-content/uploads/2020/04/image-1503851391-7297-225x300.jpg"],
    ],
  },
];

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "dublin-restoration-migration" } }, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          get(res.headers.location).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`${res.statusCode} ${url}`));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });
}

async function save(filePath, urls) {
  for (const url of urls) {
    try {
      const buf = await get(url);
      if (buf.length < 500) continue;
      fs.writeFileSync(filePath, buf);
      console.log("ok", filePath);
      return;
    } catch (err) {
      console.log("fail", url, err.message);
    }
  }
}

(async () => {
  for (const job of jobs) {
    fs.mkdirSync(job.dir, { recursive: true });
    for (const [name, ...urls] of job.files) {
      await save(path.join(job.dir, name), urls);
    }
  }
})();
