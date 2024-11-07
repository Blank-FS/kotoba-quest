import { GroupType, WordType } from ".";

//Snapshot of all data from AWS RDS database - Nov 7th, 2024

const nounData: WordType[] = [
  {
    id: "6eab8479-3f49-4434-9653-eef64eabea33",
    word: "accountant",
    meaning: "かいけいし",
    kanji: "会計士",
    groupId: "f1b4831d-2bd0-4ab6-bbb4-c36bef6463e1",
  },
  {
    id: "b285c5b3-9114-4a46-90ff-752819432bc3",
    word: "airplane",
    meaning: "ひこうき",
    kanji: "飛行機",
    groupId: "8165ed00-ddf2-40c7-8403-6e4d0adb6f4e",
  },
  {
    id: "bd079af5-b8a4-4a7e-a8dd-ba3ba8c2f8f5",
    word: "airport",
    meaning: "くうこう",
    kanji: "空港",
    groupId: "8165ed00-ddf2-40c7-8403-6e4d0adb6f4e",
  },
  {
    id: "4a621177-b027-4899-bafc-8cc56acd8164",
    word: "apple",
    meaning: "りんご",
    kanji: "林檎",
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "dfd412bc-bbad-499d-adc2-35a317fb1ab7",
    word: "aunt",
    meaning: "おばさん",
    kanji: "叔母さん",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "85b33367-aa13-4d08-8692-a0b3cecc34bf",
    word: "banana",
    meaning: "バナナ",
    kanji: null,
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "c5364aec-f736-48bc-a1f4-c83f320bc024",
    word: "bicycle",
    meaning: "じてんしゃ",
    kanji: "自転車",
    groupId: "8165ed00-ddf2-40c7-8403-6e4d0adb6f4e",
  },
  {
    id: "fae85193-c37d-4410-89ac-13daa6832968",
    word: "biology",
    meaning: "せいぶつがく",
    kanji: "生物学",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "df53dee6-1db1-4088-ac51-0b33e9bf6010",
    word: "bread",
    meaning: "パン",
    kanji: null,
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "8ea907d9-8305-4f87-aa3a-e71e987165f2",
    word: "bus",
    meaning: "バス",
    kanji: null,
    groupId: "8165ed00-ddf2-40c7-8403-6e4d0adb6f4e",
  },
  {
    id: "bfda0ecf-2776-4c13-abcb-95dfb6545759",
    word: "bus stop",
    meaning: "ばすてい",
    kanji: "バス停",
    groupId: "8165ed00-ddf2-40c7-8403-6e4d0adb6f4e",
  },
  {
    id: "719458dd-92c5-4dc3-a78c-af6f80e62788",
    word: "businessperson",
    meaning: "じつぎょうか",
    kanji: "実業家",
    groupId: "f1b4831d-2bd0-4ab6-bbb4-c36bef6463e1",
  },
  {
    id: "2d2f54d9-ef4e-4adc-97ee-fa1aa4463c5a",
    word: "carrot",
    meaning: "にんじん",
    kanji: "人参",
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "4b1832d8-f88f-48d3-bec0-3cd55d1ea12b",
    word: "cheese",
    meaning: "チーズ",
    kanji: null,
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "e495b2f0-a8f4-440d-89e6-489ea7f93e28",
    word: "chef",
    meaning: "りょうりにん",
    kanji: "料理人",
    groupId: "f1b4831d-2bd0-4ab6-bbb4-c36bef6463e1",
  },
  {
    id: "55d816fe-f752-4476-b50e-34964df516db",
    word: "cherry",
    meaning: "さくらんぼ",
    kanji: null,
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "30cc6dbb-25f5-4df9-8518-8ad8c4076eea",
    word: "civil servant",
    meaning: "こうむいん",
    kanji: "公務員",
    groupId: "f1b4831d-2bd0-4ab6-bbb4-c36bef6463e1",
  },
  {
    id: "11efeec0-7cac-4e89-b554-4d0d0407be73",
    word: "college/university",
    meaning: "だいがく",
    kanji: "大学",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "0f99bace-c676-4361-8dad-ea11ab78b604",
    word: "cousin",
    meaning: "いとこ",
    kanji: "従兄弟",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "cf875078-d417-4a90-b2a5-f6b478e95c3d",
    word: "cucumber",
    meaning: "きゅうり",
    kanji: "胡瓜",
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "a08f7a2c-9cae-4117-990b-f4656826eb34",
    word: "daughter",
    meaning: "むすめ",
    kanji: "娘",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "79cc96a6-eb11-4011-a191-00d3279c2972",
    word: "degree",
    meaning: "がくい",
    kanji: "学位",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "53b8bc88-91ff-48d2-865b-27574cd204b2",
    word: "doctor",
    meaning: "いし",
    kanji: "医師",
    groupId: "f1b4831d-2bd0-4ab6-bbb4-c36bef6463e1",
  },
  {
    id: "88e5a362-fb94-4b06-96f7-7e6a4f29d982",
    word: "economics",
    meaning: "けいざいがく",
    kanji: "経済学",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "1a833523-4077-457a-9ea3-cd7bfd673508",
    word: "egg",
    meaning: "たまご",
    kanji: "卵",
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "9abafd66-3287-466a-bf1f-29d6225cda40",
    word: "elementary school",
    meaning: "しょうがっこう",
    kanji: "小学校",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "009104c3-cf63-49e9-a473-603fc0a278d8",
    word: "engineer",
    meaning: "ぎじゅつしゃ",
    kanji: "技術者",
    groupId: "f1b4831d-2bd0-4ab6-bbb4-c36bef6463e1",
  },
  {
    id: "fe586e82-093e-4398-9cfa-00591e06aeea",
    word: "English",
    meaning: "えいご",
    kanji: "英語",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "573b6d6f-c380-4572-9433-622895cecfcb",
    word: "exam",
    meaning: "しけん",
    kanji: "試験",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "830a7730-54c5-4ba8-aef1-8962907537f8",
    word: "father",
    meaning: "おとうさん",
    kanji: "お父さん",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "38f18505-83c2-43cc-8dc5-48207ecbe86b",
    word: "firefighter",
    meaning: "しょうぼうし",
    kanji: "消防士",
    groupId: "f1b4831d-2bd0-4ab6-bbb4-c36bef6463e1",
  },
  {
    id: "8601b52e-6dcb-451c-aa29-8377a8aca50f",
    word: "fish",
    meaning: "さかな",
    kanji: "魚",
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "30885cb6-1567-4588-905a-2e56881e2e89",
    word: "geography",
    meaning: "ちり",
    kanji: "地理",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "ad46cc19-75df-4e88-8085-cee93b81436a",
    word: "grandfather",
    meaning: "おじいさん",
    kanji: "お祖父さん",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "decc8a39-c48a-4d97-8eb2-79f049bad543",
    word: "grandmother",
    meaning: "おばあさん",
    kanji: "お祖母さん",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "1dbac220-e70f-4a34-8776-3b1e8fc61796",
    word: "grape",
    meaning: "ぶどう",
    kanji: null,
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "b730cf64-2441-4220-9441-a44ff7c0d5d5",
    word: "high school",
    meaning: "こうこう",
    kanji: "高校",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "df5451cc-cb75-44ce-9122-5c13d9450527",
    word: "history",
    meaning: "れきし",
    kanji: "歴史",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "27d9c428-2551-4cf8-a430-bec4f2e67384",
    word: "homework",
    meaning: "しゅくだい",
    kanji: "宿題",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "adc6add1-b095-4250-833a-12e7ae42600e",
    word: "intersection",
    meaning: "こうさてん",
    kanji: "交差点",
    groupId: "8165ed00-ddf2-40c7-8403-6e4d0adb6f4e",
  },
  {
    id: "3a440da9-baf0-4d3b-8c6c-6a736d6c8a79",
    word: "lawyer",
    meaning: "べんごし",
    kanji: "弁護士",
    groupId: "f1b4831d-2bd0-4ab6-bbb4-c36bef6463e1",
  },
  {
    id: "1f1d23cb-7e7d-4de1-9558-48afc78ee546",
    word: "linguistics",
    meaning: "げんごがく",
    kanji: "言語学",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "a6d114fb-2883-4bc7-b0c1-f41f7093752d",
    word: "literature",
    meaning: "ぶんがく",
    kanji: "文学",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "78a2e923-608a-4832-8936-c61b5e028825",
    word: "major",
    meaning: "せんこう",
    kanji: "専攻",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "56b31c74-66a1-4784-9aa4-0c0d7d02fd08",
    word: "mandarin orange",
    meaning: "みかん",
    kanji: "蜜柑",
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "5a5c229e-fc5a-4f2d-bb6d-736322eadfd9",
    word: "mathematics",
    meaning: "すうがく",
    kanji: "数学",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "68f2d802-bbed-4cc2-85c8-083e87a9415a",
    word: "meat",
    meaning: "にく",
    kanji: "肉",
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "92c09064-81fc-4cef-8039-720f022ad3b2",
    word: "middle school",
    meaning: "ちゅうがっこう",
    kanji: "中学校",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "8b189c5a-eb26-47c0-b4ee-b66f52d0b7a1",
    word: "milk",
    meaning: "ぎゅうにゅう",
    kanji: "牛乳",
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "b5e7fc2c-1c43-48e8-b1a7-41d33cffb71c",
    word: "mother",
    meaning: "おかあさん",
    kanji: "お母さん",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "5072f041-e671-41e8-a025-95b6f1ecfbf5",
    word: "nurse",
    meaning: "かんごし",
    kanji: "看護師",
    groupId: "f1b4831d-2bd0-4ab6-bbb4-c36bef6463e1",
  },
  {
    id: "89377a85-3012-48b7-89bd-aaf292a0a8a1",
    word: "older brother",
    meaning: "あに",
    kanji: "兄",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "c639607c-6bb8-4064-af56-889fb138da50",
    word: "older sister",
    meaning: "あね",
    kanji: "姉",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "a9f784ca-75bc-4260-829c-4aa6abdccdf8",
    word: "onion",
    meaning: "たまねぎ",
    kanji: "玉葱",
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "c57fead1-1ef0-42f3-8e24-7cd5d8bff795",
    word: "only child",
    meaning: "ひとりっこ",
    kanji: "一人っ子",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "3056457e-4cfc-4be3-a174-1e5ff4f84462",
    word: "philosophy",
    meaning: "てつがく",
    kanji: "哲学",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "a920d279-594b-4000-be50-ad680015f181",
    word: "physics",
    meaning: "ぶつり",
    kanji: "物理",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "bcf285db-b435-4e19-a098-269080130df0",
    word: "police officer",
    meaning: "けいさつかん",
    kanji: "警察官",
    groupId: "f1b4831d-2bd0-4ab6-bbb4-c36bef6463e1",
  },
  {
    id: "84c5866e-3757-4a52-9780-fc512cab2f85",
    word: "political science",
    meaning: "せいじがく",
    kanji: "政治学",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "b8e8593e-7d87-4756-9e7d-d02ae6498479",
    word: "potato",
    meaning: "じゃがいも",
    kanji: "じゃが芋",
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "a0972397-9c82-4e67-b048-326f2fb6240b",
    word: "psychology",
    meaning: "しんりがく",
    kanji: "心理学",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "39dba6f7-80da-4fd6-91e6-87e6e05ee7da",
    word: "pumpkin",
    meaning: "かぼちゃ",
    kanji: null,
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "16b780b0-69d3-4cd0-b219-207888d59fe4",
    word: "relative",
    meaning: "しんせき",
    kanji: "親戚",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "8579b881-e80b-459e-ac18-8501c38e3904",
    word: "rice",
    meaning: "ごはん",
    kanji: "ご飯",
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "ceb0ca2c-e130-48d3-b63e-e42b4d5be68e",
    word: "road",
    meaning: "みち/どうろ",
    kanji: "道/道路",
    groupId: "8165ed00-ddf2-40c7-8403-6e4d0adb6f4e",
  },
  {
    id: "3bbe3e26-5e7a-4cda-9bd9-f769bd4d1530",
    word: "science",
    meaning: "かがく",
    kanji: "科学",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "e041fc22-427e-433b-b9f1-e38d4aef5394",
    word: "son",
    meaning: "むすこ",
    kanji: "息子",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "9be39c66-ee2c-4301-806a-cf3ef192a31c",
    word: "station",
    meaning: "えき",
    kanji: "駅",
    groupId: "8165ed00-ddf2-40c7-8403-6e4d0adb6f4e",
  },
  {
    id: "4cf5f520-1555-4d41-9dd0-918fd67c93b9",
    word: "strawberry",
    meaning: "いちご",
    kanji: "苺",
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "96ec8b7f-cd2f-43dc-a3ea-943f3e30acfd",
    word: "student",
    meaning: "せいと/がくせい",
    kanji: "生徒/学生",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "c0c0a06f-2884-4659-8adb-c457600a5af9",
    word: "subway",
    meaning: "ちかてつ",
    kanji: "地下鉄",
    groupId: "8165ed00-ddf2-40c7-8403-6e4d0adb6f4e",
  },
  {
    id: "42ee2f1a-bbc2-48db-ae9c-b1f403ea644f",
    word: "taxi",
    meaning: "タクシー",
    kanji: null,
    groupId: "8165ed00-ddf2-40c7-8403-6e4d0adb6f4e",
  },
  {
    id: "bde3aa34-6f8a-4b11-8ff1-e97c38e42c7b",
    word: "teacher",
    meaning: "せんせい/きょうし",
    kanji: "先生/教師",
    groupId: "348965d9-7132-4765-a2f4-0973d8368260",
  },
  {
    id: "d483a54d-06f7-46e6-9d39-4eff9c866bd1",
    word: "tomato",
    meaning: "トマト",
    kanji: null,
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "ff5db8e2-031b-4578-8006-e59051278069",
    word: "traffic light",
    meaning: "しんごう",
    kanji: "信号",
    groupId: "8165ed00-ddf2-40c7-8403-6e4d0adb6f4e",
  },
  {
    id: "fefbbf5e-add1-4335-a25c-3e67e8b52fee",
    word: "train",
    meaning: "でんしゃ",
    kanji: "電車",
    groupId: "8165ed00-ddf2-40c7-8403-6e4d0adb6f4e",
  },
  {
    id: "017cee2b-d3a3-4c53-8cf6-1d7e1fcc155c",
    word: "uncle",
    meaning: "おじさん",
    kanji: "叔父さん",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "13a58cfa-7aac-4c11-9cd2-ff652f7a8fa0",
    word: "yogurt",
    meaning: "ヨーグルト",
    kanji: null,
    groupId: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
  },
  {
    id: "dd4fcda2-6176-480e-b661-2ae500798cef",
    word: "younger brother",
    meaning: "おとうと",
    kanji: "弟",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
  {
    id: "71c32891-f2da-454e-b6da-3c22c49bda8e",
    word: "younger sister",
    meaning: "いもうと",
    kanji: "妹",
    groupId: "69a511df-8cb2-492f-b165-c7a68874e551",
  },
];

const verbData: WordType[] = [
  {
    id: "6680798f-ec62-4c3d-80ea-845939fc907d",
    word: "to buy",
    meaning: "かいます",
    kanji: "買います",
    groupId: "b01a990c-eb8d-4df2-89a1-eaff4b8001c6",
  },
  {
    id: "d5ea4de8-bf5f-46be-8a2c-1369a084e714",
    word: "to come",
    meaning: "きます",
    kanji: "来ます",
    groupId: "3cb15de7-661b-4809-9cc0-f623968d13d7",
  },
  {
    id: "1274dcde-0270-4dd4-9761-473bf2a3e8ee",
    word: "to cook",
    meaning: "りょうりします",
    kanji: "料理します",
    groupId: "3cb15de7-661b-4809-9cc0-f623968d13d7",
  },
  {
    id: "3bb27849-5826-4530-9a21-0afc963de3bc",
    word: "to do",
    meaning: "します",
    kanji: null,
    groupId: "3cb15de7-661b-4809-9cc0-f623968d13d7",
  },
  {
    id: "e4dd2800-1ec3-491e-b1e6-91b95918e81d",
    word: "to drink",
    meaning: "のみます",
    kanji: "飲みます",
    groupId: "b01a990c-eb8d-4df2-89a1-eaff4b8001c6",
  },
  {
    id: "6ffa0e2f-87fc-4866-9a79-78d4a63639b2",
    word: "to eat",
    meaning: "たべます",
    kanji: "食べます",
    groupId: "dcb2167c-c5ea-41c5-9dc9-1eab444e0791",
  },
  {
    id: "ce9040cb-0e14-4fd3-b6a5-eeba92d243c2",
    word: "to get up",
    meaning: "おきます",
    kanji: "起きます",
    groupId: "dcb2167c-c5ea-41c5-9dc9-1eab444e0791",
  },
  {
    id: "d4edb6ab-82a8-4874-aa4f-1f1db25a079a",
    word: "to go",
    meaning: "いきます",
    kanji: "行きます",
    groupId: "b01a990c-eb8d-4df2-89a1-eaff4b8001c6",
  },
  {
    id: "d4022633-a486-41e9-82c6-90a6c98e1df3",
    word: "to listen, to hear",
    meaning: "ききます",
    kanji: "聞きます",
    groupId: "b01a990c-eb8d-4df2-89a1-eaff4b8001c6",
  },
  {
    id: "2adbd76d-821f-473c-8f6c-13c845cfade3",
    word: "to look",
    meaning: "みます",
    kanji: "見ます",
    groupId: "dcb2167c-c5ea-41c5-9dc9-1eab444e0791",
  },
  {
    id: "e6306256-454f-4500-a60c-3ceee424886c",
    word: "to sing",
    meaning: "うたいます",
    kanji: "歌います",
    groupId: "b01a990c-eb8d-4df2-89a1-eaff4b8001c6",
  },
  {
    id: "b6a33ba4-86a6-4c8a-a597-a6695ddb0527",
    word: "to sleep",
    meaning: "ねます",
    kanji: "寝ます",
    groupId: "dcb2167c-c5ea-41c5-9dc9-1eab444e0791",
  },
  {
    id: "052c7cff-c719-4839-bf30-137fbba0ab86",
    word: "to speak, to talk",
    meaning: "はなします",
    kanji: "話します",
    groupId: "b01a990c-eb8d-4df2-89a1-eaff4b8001c6",
  },
  {
    id: "fd49d5af-56e1-4829-9d75-3784861a48c6",
    word: "to study",
    meaning: "べんきょうします",
    kanji: "勉強します",
    groupId: "3cb15de7-661b-4809-9cc0-f623968d13d7",
  },
  {
    id: "2c4de22b-c424-44c4-89e8-a7568bb6171e",
    word: "to swim",
    meaning: "およぎます",
    kanji: "泳ぎます",
    groupId: "b01a990c-eb8d-4df2-89a1-eaff4b8001c6",
  },
  {
    id: "d21c33a7-43a9-447d-8e1a-ec1fe3a8a084",
    word: "to write",
    meaning: "かきます",
    kanji: "書きます",
    groupId: "b01a990c-eb8d-4df2-89a1-eaff4b8001c6",
  },
];

const adjectiveData: WordType[] = [
  {
    id: "031c7711-7a76-47f0-9a1c-ecc2b60b3280",
    word: "amazing",
    meaning: "すごい",
    kanji: null,
    groupId: "2c81d0c0-d73a-4185-a0f1-f4e6ff150bdc",
  },
  {
    id: "106b3e18-df95-49ee-8d60-877ac9468322",
    word: "beautiful",
    meaning: "きれい",
    kanji: "綺麗",
    groupId: "b5dccae3-d8c1-469e-9d54-3633145de282",
  },
  {
    id: "f419acd0-00cc-43b5-b032-30f359e9706e",
    word: "big",
    meaning: "おおきい",
    kanji: "大きい",
    groupId: "2c81d0c0-d73a-4185-a0f1-f4e6ff150bdc",
  },
  {
    id: "69dc54d2-6e49-4166-a06b-1a2c0e8969db",
    word: "boring",
    meaning: "つまらない",
    kanji: "詰まらない",
    groupId: "2c81d0c0-d73a-4185-a0f1-f4e6ff150bdc",
  },
  {
    id: "8cdb0353-d6fe-4e44-ac52-152867a1623e",
    word: "busy",
    meaning: "いそがしい",
    kanji: "忙しい",
    groupId: "2c81d0c0-d73a-4185-a0f1-f4e6ff150bdc",
  },
  {
    id: "bab369d6-08a8-4973-89c8-8816d50be6e8",
    word: "cheap",
    meaning: "やすい",
    kanji: "安い",
    groupId: "2c81d0c0-d73a-4185-a0f1-f4e6ff150bdc",
  },
  {
    id: "e91d3680-1e4b-492a-a912-e1f82a64734c",
    word: "convenient",
    meaning: "べんり",
    kanji: "便利",
    groupId: "b5dccae3-d8c1-469e-9d54-3633145de282",
  },
  {
    id: "a6e0f724-689f-4a15-b4d7-7653d471d325",
    word: "dislike",
    meaning: "きらい",
    kanji: null,
    groupId: "b5dccae3-d8c1-469e-9d54-3633145de282",
  },
  {
    id: "5aeb39fb-b83d-4ca9-a88e-ecf2c36662b0",
    word: "fun",
    meaning: "たのしい",
    kanji: "楽しい",
    groupId: "2c81d0c0-d73a-4185-a0f1-f4e6ff150bdc",
  },
  {
    id: "4a6af11d-b3ea-493f-8059-33c8c6712e17",
    word: "high",
    meaning: "たかい",
    kanji: "高い",
    groupId: "2c81d0c0-d73a-4185-a0f1-f4e6ff150bdc",
  },
  {
    id: "5feb0721-8122-43c2-a978-e19938750aee",
    word: "important",
    meaning: "だいじ",
    kanji: "大事",
    groupId: "b5dccae3-d8c1-469e-9d54-3633145de282",
  },
  {
    id: "a70634ec-38fc-46d9-af3d-3bcbe4042409",
    word: "kind",
    meaning: "やさしい",
    kanji: "優しい",
    groupId: "2c81d0c0-d73a-4185-a0f1-f4e6ff150bdc",
  },
  {
    id: "6d20dee4-64c5-44b2-b2de-7d65faf4b298",
    word: "new",
    meaning: "あたらしい",
    kanji: "新しい",
    groupId: "2c81d0c0-d73a-4185-a0f1-f4e6ff150bdc",
  },
  {
    id: "8f67de8b-e011-43a7-b08e-8a493c2e4e1b",
    word: "quiet",
    meaning: "しずか",
    kanji: "静か",
    groupId: "b5dccae3-d8c1-469e-9d54-3633145de282",
  },
  {
    id: "ee16a100-904b-46c6-ab06-19d6f3f612b9",
    word: "small",
    meaning: "ちいさい",
    kanji: "小さい",
    groupId: "2c81d0c0-d73a-4185-a0f1-f4e6ff150bdc",
  },
  {
    id: "f4eaf444-fd35-49a8-a041-ae21870bcd9a",
    word: "strong",
    meaning: "つよい",
    kanji: "強い",
    groupId: "2c81d0c0-d73a-4185-a0f1-f4e6ff150bdc",
  },
  {
    id: "e7df12da-9390-4d29-b66f-f0a4e9631f15",
    word: "unskilled",
    meaning: "へた",
    kanji: null,
    groupId: "b5dccae3-d8c1-469e-9d54-3633145de282",
  },
  {
    id: "a346144d-966a-4f0b-82dd-2e8ba3bdf179",
    word: "weak",
    meaning: "よわい",
    kanji: "弱い",
    groupId: "2c81d0c0-d73a-4185-a0f1-f4e6ff150bdc",
  },
];

const dataMap = new Map();
dataMap.set("noun", nounData);
dataMap.set("verb", verbData);
dataMap.set("adjective", adjectiveData);
export { dataMap };

const adjectiveCategory: GroupType[] = [
  {
    id: "2c81d0c0-d73a-4185-a0f1-f4e6ff150bdc",
    Type: {
      id: "590cea18-771b-4369-a8a5-e907109490a0",
      type: "adjective",
    },
    category: "i-Adjective",
  },
  {
    id: "b5dccae3-d8c1-469e-9d54-3633145de282",
    Type: {
      id: "590cea18-771b-4369-a8a5-e907109490a0",
      type: "adjective",
    },
    category: "na-Adjective",
  },
];

const verbCategory: GroupType[] = [
  {
    id: "b01a990c-eb8d-4df2-89a1-eaff4b8001c6",
    Type: {
      id: "5ecc52fc-f827-4cdf-8991-d54ee672c7d2",
      type: "verb",
    },
    category: "G1 Verb",
  },
  {
    id: "dcb2167c-c5ea-41c5-9dc9-1eab444e0791",
    Type: {
      id: "5ecc52fc-f827-4cdf-8991-d54ee672c7d2",
      type: "verb",
    },
    category: "G2 Verb",
  },
  {
    id: "3cb15de7-661b-4809-9cc0-f623968d13d7",
    Type: {
      id: "5ecc52fc-f827-4cdf-8991-d54ee672c7d2",
      type: "verb",
    },
    category: "G3 Verb",
  },
];

const nounCategory: GroupType[] = [
  {
    id: "348965d9-7132-4765-a2f4-0973d8368260",
    Type: {
      id: "bd9f9c1d-42ec-4e05-b448-25a3dd354459",
      type: "noun",
    },
    category: "academics",
  },
  {
    id: "7815048d-e8a6-40f9-a7f6-77cbf9371228",
    Type: {
      id: "bd9f9c1d-42ec-4e05-b448-25a3dd354459",
      type: "noun",
    },
    category: "food",
  },
  {
    id: "f1b4831d-2bd0-4ab6-bbb4-c36bef6463e1",
    Type: {
      id: "bd9f9c1d-42ec-4e05-b448-25a3dd354459",
      type: "noun",
    },
    category: "occupation",
  },
  {
    id: "69a511df-8cb2-492f-b165-c7a68874e551",
    Type: {
      id: "bd9f9c1d-42ec-4e05-b448-25a3dd354459",
      type: "noun",
    },
    category: "relationship",
  },
  {
    id: "8165ed00-ddf2-40c7-8403-6e4d0adb6f4e",
    Type: {
      id: "bd9f9c1d-42ec-4e05-b448-25a3dd354459",
      type: "noun",
    },
    category: "transportation",
  },
];

const categoryMap = new Map();
categoryMap.set("noun", nounCategory);
categoryMap.set("verb", verbCategory);
categoryMap.set("adjective", adjectiveCategory);
export { categoryMap };