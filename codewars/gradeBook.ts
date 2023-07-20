export function getGrade(score1: number, score2: number, score3: number): string {
  const averageScore = (score1 + score2 + score3) / 3;

  if (averageScore >= 90 && averageScore <= 100) {
    return 'A';
  } else if (averageScore >= 80 && averageScore < 90) {
    return 'B';
  } else if (averageScore >= 70 && averageScore < 80) {
    return 'C';
  } else if (averageScore >= 60 && averageScore < 70) {
    return 'D';
  } else {
    return 'F';
  }
}


// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/typescript
