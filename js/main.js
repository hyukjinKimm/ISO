const industry_iso_standards = {
    "건설": [
        { code: "ISO 45001", description: "안전 및 건강 경영시스템 (OHSMS)", purpose: "작업장에서의 안전 관리 및 사고 예방" },
        { code: "ISO 9001", description: "품질경영시스템 (QMS)", purpose: "서비스의 품질을 향상 시키고 효율성을 극대화" },
        { code: "ISO 14001", description: "환경경영시스템 (EMS, Environmental management systems)", purpose: "자원 관리와 환경 영향을 최소화하고 지속 가능한 운영" },
        { code: "ISO 50001", description: "에너지경영시스템 (EnMS)", purpose: "에너지 사용을 최적화하고 효율성을 높여 에너지 비용 절감 및 지속 가능성 증진" }
    ],
    "교육": [
        { code: "ISO 21001", description: "교육조직관리시스템 (EOMS)", purpose: "교육 기관의 교육 관리 시스템을 표준화하고 성과 개선" },
        { code: "ISO 9001", description: "품질경영시스템 (QMS)", purpose: "서비스의 품질을 향상 시키고 효율성을 극대화" },
        { code: "ISO 27001", description: "정보 보안 관리시스템 (ISMS)", purpose: "정보의 기밀성, 무결성, 가용성 보호" },
        { code: "ISO 14001", description: "환경경영시스템 (EMS, Environmental management systems)", purpose: "자원 관리와 환경 영향을 최소화하고 지속 가능한 운영" }
    ],
    "에너지/자원": [
        { code: "ISO 50001", description: "에너지경영시스템 (EnMS)", purpose: "에너지 사용을 최적화하고 효율성을 높여 에너지 비용 절감 및 지속 가능성 증진" },
        { code: "ISO 14001", description: "환경경영시스템 (EMS, Environmental management systems)", purpose: "자원 관리와 환경 영향을 최소화하고 지속 가능한 운영" },
        { code: "ISO 14064", description: "온실가스배출량관리 (GHG)", purpose: "온실가스 배출량의 측정, 보고 및 검증을 위한 표준" },
        { code: "ISO 45001", description: "안전 및 건강 경영시스템 (OHSMS)", purpose: "작업장에서의 안전 관리 및 사고 예방" }
    ],
    "엔지니어링": [
        { code: "ISO 9001", description: "품질경영시스템 (QMS)", purpose: "서비스의 품질을 향상 시키고 효율성을 극대화" },
        { code: "ISO 45001", description: "안전 및 건강 경영시스템 (OHSMS)", purpose: "작업장에서의 안전 관리 및 사고 예방" },
        { code: "ISO 14001", description: "환경경영시스템 (EMS, Environmental management systems)", purpose: "자원 관리와 환경 영향을 최소화하고 지속 가능한 운영" },
        { code: "ISO 55001", description: "자산 관리 시스템 (AMS)", purpose: "자산의 효율적인 관리와 운영" }
    ],
    "금융/보험": [
        { code: "ISO 27001", description: "정보 보안 관리시스템 (ISMS)", purpose: "정보의 기밀성, 무결성, 가용성 보호" },
        { code: "ISO 22301", description: "비즈니스 연속성 관리 시스템 (BCMS)", purpose: "서비스의 중단 시에도 운영을 지속하기 위한 비즈니스 연속성 계획 수립" },
        { code: "ISO 9001", description: "품질경영시스템 (QMS)", purpose: "서비스의 품질을 향상 시키고 효율성을 극대화" },
        { code: "ISO 14001", description: "환경경영시스템 (EMS, Environmental management systems)", purpose: "자원 관리와 환경 영향을 최소화하고 지속 가능한 운영" }
    ],
    "식품제조": [
        { code: "ISO 22000", description: "식품안전경영시스템 (FSMS)", purpose: "식품 제조 및 유통 과정에서의 안전성 확보" },
        { code: "ISO 9001", description: "품질경영시스템 (QMS)", purpose: "서비스의 품질을 향상 시키고 효율성을 극대화" },
        { code: "ISO 14001", description: "환경경영시스템 (EMS, Environmental management systems)", purpose: "자원 관리와 환경 영향을 최소화하고 지속 가능한 운영" },
        { code: "ISO 45001", description: "안전 및 건강 경영시스템 (OHSMS)", purpose: "작업장에서의 안전 관리 및 사고 예방" }
    ],
    "정보기술 (IT)": [
        { code: "ISO 27001", description: "정보 보안 관리시스템 (ISMS)", purpose: "정보의 기밀성, 무결성, 가용성 보호" },
        { code: "ISO 20000-1", description: "IT서비스관리 (ITSM)", purpose: "IT 서비스 제공의 품질을 관리하고 최적화" },
        { code: "ISO 27017", description: "클라우드 보안 관리", purpose: "클라우드 서비스 제공과 관련된 보안 관리" },
        { code: "ISO 9001", description: "품질경영시스템 (QMS)", purpose: "서비스의 품질을 향상 시키고 효율성을 극대화" }
    ],
    "제조/생산": [
        { code: "ISO 9001", description: "품질경영시스템 (QMS)", purpose: "서비스의 품질을 향상 시키고 효율성을 극대화" },
        { code: "ISO 14001", description: "환경경영시스템 (EMS, Environmental management systems)", purpose: "자원 관리와 환경 영향을 최소화하고 지속 가능한 운영" },
        { code: "ISO 45001", description: "안전 및 건강 경영시스템 (OHSMS)", purpose: "작업장에서의 안전 관리 및 사고 예방" },
        { code: "ISO 50001", description: "에너지경영시스템 (EnMS)", purpose: "에너지 사용을 최적화하고 효율성을 높여 에너지 비용 절감 및 지속 가능성 증진" }
    ],
    "의료/제약": [
        { code: "ISO 13485", description: "의료기기품질경영시스템", purpose: "의료 기기의 설계, 개발, 제조, 설치 및 서비스를 위한 품질 관리" },
        { code: "ISO 15189", description: "의료 실험실 품질 관리 및 능력", purpose: "의료 실험실의 품질 및 성능을 보장하기 위한 표준" },
        { code: "ISO 9001", description: "품질경영시스템 (QMS)", purpose: "서비스의 품질을 향상 시키고 효율성을 극대화" },
        { code: "ISO 14001", description: "환경경영시스템 (EMS, Environmental management systems)", purpose: "자원 관리와 환경 영향을 최소화하고 지속 가능한 운영" }
    ],
    "공공 부문": [
        { code: "ISO 9001", description: "품질경영시스템 (QMS)", purpose: "서비스의 품질을 향상 시키고 효율성을 극대화" },
        { code: "ISO 14001", description: "환경경영시스템 (EMS, Environmental management systems)", purpose: "자원 관리와 환경 영향을 최소화하고 지속 가능한 운영" },
        { code: "ISO 45001", description: "안전 및 건강 경영시스템 (OHSMS)", purpose: "작업장에서의 안전 관리 및 사고 예방" },
        { code: "ISO 37001", description: "반부패경영시스템", purpose: "부패 방지를 위한 관리 시스템 구축 및 유지" }
    ],
    "소매업": [
        { code: "ISO 9001", description: "품질경영시스템 (QMS)", purpose: "서비스의 품질을 향상 시키고 효율성을 극대화" },
        { code: "ISO 14001", description: "환경경영시스템 (EMS, Environmental management systems)", purpose: "자원 관리와 환경 영향을 최소화하고 지속 가능한 운영" },
        { code: "ISO 45001", description: "안전 및 건강 경영시스템 (OHSMS)", purpose: "작업장에서의 안전 관리 및 사고 예방" },
        { code: "ISO 50001", description: "에너지경영시스템 (EnMS)", purpose: "에너지 사용을 최적화하고 효율성을 높여 에너지 비용 절감 및 지속 가능성 증진" }
    ],
    "운송": [
        { code: "ISO 9001", description: "품질경영시스템 (QMS)", purpose: "서비스의 품질을 향상 시키고 효율성을 극대화" },
        { code: "ISO 14001", description: "환경경영시스템 (EMS, Environmental management systems)", purpose: "자원 관리와 환경 영향을 최소화하고 지속 가능한 운영" },
        { code: "ISO 45001", description: "안전 및 건강 경영시스템 (OHSMS)", purpose: "작업장에서의 안전 관리 및 사고 예방" },
        { code: "ISO 50001", description: "에너지경영시스템 (EnMS)", purpose: "에너지 사용을 최적화하고 효율성을 높여 에너지 비용 절감 및 지속 가능성 증진" }
    ]
};

function showISOStandards(industry) {
    const standards = industry_iso_standards[industry];
    const standardsDiv = document.getElementById('iso-standards');
    if (standards) {
        standardsDiv.innerHTML = `<h2>${industry}의 ISO 우선순위</h2>
            <ol>${standards.map(iso => `
                <li>
                    <strong>${iso.code}</strong>: ${iso.description} - ${iso.purpose}
                </li>`).join('')}
            </ol>`;
    } else {
        standardsDiv.innerHTML = `<p>정보가 없습니다.</p>`;
    }
}
