// seedFirebase.js
import admin from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse(
  fs.readFileSync(
    "./church-web-4b0c8-firebase-adminsdk-fbsvc-10ef2dc085.json",
    "utf-8",
  ),
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const dbJson = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

async function clearCollection(collectionName) {
  const snapshot = await db.collection(collectionName).get();
  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();
}

async function seed() {
  try {
    // مسح البيانات القديمة
    await clearCollection("news");
    await clearCollection("mass");
    await clearCollection("gallery");

    console.log("🧹 Old data cleared!");

    // رفع الأخبار
    for (const news of dbJson.all.news) {
      await db.collection("news").add(news);
    }

    // رفع القداسات
    for (const mass of dbJson.all.mass) {
      await db.collection("mass").add(mass);
    }

    // رفع المعرض
    for (const gallery of dbJson.all.gallery) {
      await db.collection("gallery").add(gallery);
    }

    console.log("✅ Data seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  }
}

// تشغيل السكريبت
seed();
