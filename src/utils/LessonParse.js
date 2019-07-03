/* Removes the entity type from the string */
export function LessonParseType(lessonType) {
  // Store the entity type string pattern
  const entityString = "lesson_step_entity--";

  // Set the type by getting the remainder of the string after the entityString
  const type = lessonType.slice(
    lessonType.indexOf(entityString) + entityString.length
  );

  // Away we go
  return type;
}
