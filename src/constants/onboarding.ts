import ic_nature from '../../public/ic-nature.png';
import ic_art from '../../public/ic-art.png';
import ic_restaurant from '../../public/ic-restaurant.png';
import ic_shopping from '../../public/ic-shopping.png';

export const ONBOARDING_DESC = {
  welcomeTitle: '어서오세요!',
  welcomeDesc: `저는 사용자님의 즐거운 워케이션을 도와드릴 피츠라고 해요.\n지금부터 일과 쉼에 몰입하기 위한 몇 가지 질문을 드릴게요.`, // 템플릿 리터럴로 교체 예정
  startBtn: '시작하기 >',
  reasonTitle: '이번 워케이션에 참여하게 된 가장 큰 이유는 무엇인가요?',
  reasonPlaceholder:
    '예: 새로운 환경에서 업무 효율을 높이고 영감을 얻기 위해서',
  periodTitle: '언제부터 언제까지 워케이션에 참여하시나요?',
  fromText: '부터',
  toText: '까지',
  placeTitle: '어디에서 워케이션에 참여하시나요?',
  placeDesc: '숙소명을 입력해주세요. 위치 기반 맞춤형 장소를 추천해드릴게요.',
  placePlaceholder: '숙소명',
  coreTimeTitle: '업무 집중 시간대가 언제인가요?',
  coreTimeDesc: '코어타임 동안, 오피츠가 업무 집중을 도와드릴게요.',
  fromPlaceholder: '09:00',
  toPlaceholder: '16:00',
  travleTitle: '어떤 여행을 하고 싶나요?',
  travleDesc:
    '취향에 맞는 여행 키워드를 선택해 주세요. 맞춤형 여행 장소를 추천해 드릴게요.',
  workplaceTitle: '어디에서 일을 하고 싶나요?',
  workplaceDesc:
    '취향에 맞는 업무 키워드를 선택해 주세요. 맞춤형 업무 장소를 추천해 드릴게요.',
  visitTitle: '방문 예정인 장소가 있나요?',
  visitDesc:
    '오피츠 버킷리스트에 담아, 워케이션 기간 중 방문해보세요. 없다면 넘어가도 괜찮아요.',
  visitPlaceholder: '방문 예정 장소명',
  skipBtn: '지금은 건너뛰기',
  goalTitle: '이번 워케이션 기간동안 달성하고 싶은 목표는 무엇인가요?',
  goalPlaceholder: '예: 새로운 프로젝트 아이디어 구체화',
  endTitle: '멋진데요!',
  endDesc: `사용자님이 알려주신 내용을 바탕으로, 워케이션 기간동안\n일에 집중하면서도 푹 쉴 수 있도록 오피츠가 늘 함께할게요.`,
  nextBtn: '다음 >',
};

export const TRAVLE_KIND = [
  {
    icon: ic_nature,
    title: '자연',
    keyName: 'NATURE',
  },
  {
    icon: ic_restaurant,
    title: '맛집',
    keyName: 'RESTAURANT',
  },
  {
    icon: ic_art,
    title: '문화예술',
    keyName: 'CULTURE',
  },
  {
    icon: ic_shopping,
    title: '쇼핑',
    keyName: 'SHOPPING',
  },
];

export const WORKPLACE_KIND = {
  CAFE: '카페',
  OFFICE: '공유오피스',
};
