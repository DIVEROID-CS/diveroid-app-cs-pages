# DIVEROID App 3.0 — My Page / CS Pages

## 목표

앱 내 My Page CS 섹션의 6개 HTML 페이지를 제작하여 개발팀(Vu Pham, Chung)에 전달.
앱스토어 출시 전까지 완료 필요.

## 기술 요구사항 (Vu Pham 요청)

1. **HTML 콘텐츠** — 반응형, Figma 디자인 일치, 모바일 앱에서 URL로 접근
2. **현지화** — 앱에서 지원하는 모든 언어 지원 (최소: EN, KO, JA, ZH)
3. **브리지 상호작용** — JavaScript 메시지 이벤트로 앱과 통신
   - 예: "1:1 문의" 버튼 → 앱의 특정 문의 화면 오픈

## 6개 페이지

| 페이지                                   | 상태            | 루피 확인 필요 사항                                       |
| ---------------------------------------- | --------------- | --------------------------------------------------------- |
| Privacy Policy                           | 🟡 초안 작성 중 | 실제 데이터 수집 항목 최종 확인                           |
| Open Source License                      | 🔴 개발팀 필요  | **개발팀(Chung)**에서 사용 중인 라이브러리 목록 제공 필요 |
| Terms of Use - Purchase & Refund Policy  | 🟡 초안 작성 중 | 환불 정책 세부 조건 확인                                  |
| Terms of Use - DIVEROID Product Warranty | 🟡 초안 작성 중 | 보증 기간/범위 최종 확인                                  |
| FAQ                                      | 🔴 콘텐츠 필요  | **루피가 Q&A 항목 작성 필요** (아래 질문 목록 참고)       |
| Tutorial                                 | 🔴 콘텐츠 필요  | **앱 스크린샷 + 튜토리얼 단계 내용** 필요                 |

## 작업 단계

- [x] 0단계: 프로젝트 폴더 생성
- [x] 1단계: HTML 베이스 템플릿 제작 (공통 스타일, JS 브리지, 다국어 구조) — `assets/css/base.css`
- [x] 2단계: Privacy Policy 초안 (KO/EN) — `html/privacy-policy.html`
- [x] 3단계: Terms of Use - Purchase & Refund Policy 초안 (KO/EN) — `html/terms-of-use.html`
- [x] 4단계: Terms of Use - Product Warranty 초안 (KO/EN) — `html/terms-of-use.html` (탭 구조)
- [ ] 5단계: FAQ 구조 + 샘플 Q&A (KO/EN) → 루피 검토 후 완성 (구조만 완성, 콘텐츠 미완)
- [ ] 6단계: Open Source License — Chung에게 라이브러리 목록 요청 필요
- [ ] 7단계: Tutorial — 앱 스크린샷 확보 후 제작

## GitHub

- Repo: https://github.com/DIVEROID-CS/diveroid-app-cs-pages (Public)
- 업로드 완료: 2026-04-02
- Vu Pham 컨펌 대기 중

## 루피가 해야 할 일 목록

### 즉시 필요

- [ ] **개발팀(Chung)에게** 앱에서 사용 중인 오픈소스 라이브러리 목록 요청
- [ ] **FAQ 초안** 검토 후 실제 자주 묻는 질문 추가/수정 (아래 FAQ 초안 참고)

### 콘텐츠 확정 후

- [ ] **Tutorial용 앱 스크린샷** — 앱 완성 후 캡처 or 개발팀에서 제공
- [ ] HTML 페이지 **호스팅 방법 결정** — 옵션:
  - A) GitHub Pages (무료, 빠름)
  - B) Vercel (무료, 빠름)
  - C) 기존 DIVEROID 웹사이트 서버에 올리기

## FAQ에 꼭 들어가야 할 항목 (루피 검토 필요)

### 앱 관련

- Universal Pro 앱을 처음 사용하는 방법은?
- 앱과 하우징 연결 방법은?
- 지원되는 스마트폰 기종은?
- 수중에서 앱이 작동하지 않을 때?

### 제품 관련

- 방수 등급은?
- 최대 수심은?
- 어떤 스마트폰 사이즈를 지원하나요?

### 주문/배송 관련

- 배송은 어디까지 되나요?
- 배송 기간은?
- 관부가세는?

### A/S 관련

- 보증 기간은?
- 하우징이 물이 들어왔을 때 처리 방법?
- 수리 요청 방법?

## 산출물 위치

- HTML 파일: `~/Desktop/Projects/diveroid-app-cs-pages/html/`
- 콘텐츠 초안: `~/Desktop/Projects/diveroid-app-cs-pages/content/`
