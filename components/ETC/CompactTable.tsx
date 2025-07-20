import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

// 컴팩트머신 한정 테이블 형태로 비교하기 위함

export default function CompactTable() {
  const data = [
    {
      item: 'Skill',
      old: 'EJS + Jquery',
      new: 'React (Vite) + Typescript',
      note: '',
    },
    {
      item: 'Lighthouse',
      old: 'NO_FCP로 측정 불가',
      new: '평균 76점',
      note: '데스크톱 기기 기준, 3회 측정',
    },
    {
      item: '리소스 요청',
      old: '약 1,400개',
      new: '50개 미만',
      note: '로그인 → 관리자 페이지 기준',
    },
    {
      item: 'Performance탭 기준 LCP',
      old: '평균 30초',
      new: '1초 이하',
      note: '로그인 → 관리자 페이지 기준',
    },
    {
      item: '속도 피드백',
      old: '피드백 지속 발생',
      new: 'MVP 배포 후 7개월 간 0건',
      note: '',
    },
    {
      item: '캐싱 유/무',
      old: '미 적용',
      new: 'API 5분 캐싱 적용',
      note: '',
    },
    {
      item: '인스턴스 리전',
      old: '미국 서부',
      new: '서울',
      note: '',
    },
    {
      item: '서비스 국가',
      old: '미국 전체 + 캐나다 일부',
      new: '한국',
      note: '',
    },
  ];
  return (
    <>
      <Table className="dark:text-black">
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold dark:text-black">항목</TableHead>
            <TableHead className="font-bold dark:text-black">APEHEX(기존)</TableHead>
            <TableHead className="font-bold dark:text-black">컴팩트머신(개선)</TableHead>
            <TableHead className="font-bold dark:text-black">비고</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{row.item}</TableCell>
              <TableCell>{row.old}</TableCell>
              <TableCell>{row.new}</TableCell>
              <TableCell>{row.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
