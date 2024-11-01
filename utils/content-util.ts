// #region IMPORT
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { APP_CONTENT_PATH, QUESTION_FOLDER } from "@/libs/folders";
// #endregion

// #region EXPORT
export function getContentData(folderPath: string, fileName: string) {
  const filePath = path.join(folderPath, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const projectSlug = fileName.replace(/\.md$/, "");

  const projectData = {
    slug: projectSlug,
    orderIndex: data.orderIndex ? data.orderIndex : -1,
    date: data.date ? data.date : data.orderIndex,
    ...data,
    content: content,
  };

  return projectData;
}

export function getAllContent(contentFolderPath: string) {
  const contentFiles = fs.readdirSync(contentFolderPath);

  const contentObjects = contentFiles.map((contentFile) => {
    return getContentData(contentFolderPath, contentFile);
  });

  const sortedObjects = contentObjects.sort((contentObjectA, contentObjectB) =>
    contentObjectA.date > contentObjectB.date ? -1 : 1
  );

  return sortedObjects;
}

export function getLinkContent(contentFolderPath: string) {
  const contentFiles = fs.readdirSync(contentFolderPath);

  const contentObjects = contentFiles.map((contentFile) => {
    return getContentData(contentFolderPath, contentFile);
  });

  const sortedObjects = contentObjects.sort((contentObjectA, contentObjectB) =>
    contentObjectA.orderIndex < contentObjectB.orderIndex ? -1 : 1
  );

  return sortedObjects;
}

export function getContentPath(folder: string) {
  return path.join(process.cwd(), `${APP_CONTENT_PATH}${folder}`);
}

export const getQuestionData = () => {
  return getAllContent(getContentPath(QUESTION_FOLDER));
};
// #endregion
