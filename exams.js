/**
 * Pre-defined Exam Sets for Dynamic Planet: Oceanography
 * Each exam has 40 questions with balanced distribution:
 * - Difficulty: 10 Easy, 12 Medium, 10 Tough, 8 Extra Hard
 * - Topics: All 8 topics represented
 * - Types: Mix of MC, Short Answer, Long Answer, Data/Diagram
 */

const EXAM_DEFINITIONS = {
    exam1: {
        name: "Exam 1: Foundations",
        description: "Core concepts across all oceanography topics. Great first exam.",
        questionIds: [
            // Easy (10): Foundational questions
            1, 6, 15, 36, 37, 72, 77, 91, 118, 127,
            // Medium (12): Moderate difficulty
            2, 7, 17, 22, 38, 50, 67, 82, 92, 101, 107, 122,
            // Tough (10): Challenging questions
            3, 10, 19, 39, 52, 74, 83, 93, 106, 123,
            // Extra Hard (8): Competition-level
            4, 11, 40, 64, 85, 109, 114, 115
        ],
        stats: {
            seawater: 6,
            surfaceCirculation: 5,
            largeScaleCirculation: 4,
            waves: 5,
            tides: 5,
            coastal: 5,
            geological: 6,
            climate: 4
        }
    },

    exam2: {
        name: "Exam 2: Currents & Circulation",
        description: "Focus on ocean circulation, currents, and water masses.",
        questionIds: [
            // Easy (10)
            5, 12, 53, 63, 66, 70, 95, 112, 135, 147,
            // Medium (12)
            8, 13, 18, 51, 56, 68, 71, 87, 99, 113, 133, 144,
            // Tough (10)
            9, 16, 23, 59, 69, 86, 100, 111, 134, 145,
            // Extra Hard (8)
            20, 24, 76, 88, 97, 130, 156, 160
        ],
        stats: {
            seawater: 4,
            surfaceCirculation: 8,
            largeScaleCirculation: 8,
            waves: 4,
            tides: 5,
            coastal: 3,
            geological: 4,
            climate: 4
        }
    },

    exam3: {
        name: "Exam 3: Waves & Coasts",
        description: "Emphasis on waves, tides, and coastal processes.",
        questionIds: [
            // Easy (10)
            25, 26, 27, 72, 77, 98, 124, 150, 172, 175,
            // Medium (12)
            28, 29, 56, 73, 78, 79, 81, 99, 102, 121, 148, 173,
            // Tough (10)
            30, 31, 55, 74, 80, 100, 103, 123, 126, 174,
            // Extra Hard (8)
            32, 33, 76, 97, 138, 153, 165, 200
        ],
        stats: {
            seawater: 3,
            surfaceCirculation: 2,
            largeScaleCirculation: 2,
            waves: 12,
            tides: 10,
            coastal: 9,
            geological: 1,
            climate: 1
        }
    },

    exam4: {
        name: "Exam 4: Climate & Deep Ocean",
        description: "Climate variability, deep circulation, and geological processes.",
        questionIds: [
            // Easy (10)
            1, 36, 37, 41, 42, 104, 127, 141, 157, 180,
            // Medium (12)
            2, 43, 44, 50, 51, 89, 105, 128, 142, 154, 158, 183,
            // Tough (10)
            3, 45, 58, 84, 90, 106, 129, 140, 155, 159,
            // Extra Hard (8)
            46, 47, 64, 85, 109, 160, 185, 191
        ],
        stats: {
            seawater: 5,
            surfaceCirculation: 2,
            largeScaleCirculation: 3,
            waves: 2,
            tides: 2,
            coastal: 3,
            geological: 11,
            climate: 12
        }
    },

    exam5: {
        name: "Exam 5: Competition Simulator",
        description: "Full competition difficulty. Tests all topics evenly.",
        questionIds: [
            // Easy (10)
            6, 15, 25, 53, 63, 91, 95, 118, 135, 166,
            // Medium (12)
            7, 17, 28, 55, 67, 92, 101, 107, 113, 146, 167, 169,
            // Tough (10)
            10, 19, 31, 58, 69, 93, 103, 111, 143, 168,
            // Extra Hard (8)
            20, 33, 47, 76, 88, 115, 153, 198
        ],
        stats: {
            seawater: 6,
            surfaceCirculation: 5,
            largeScaleCirculation: 5,
            waves: 5,
            tides: 4,
            coastal: 5,
            geological: 5,
            climate: 5
        }
    }
};

/**
 * Get exam by ID
 * @param {string} examId - One of: exam1, exam2, exam3, exam4, exam5
 * @returns {Object} Exam definition with questions
 */
function getExam(examId) {
    const examDef = EXAM_DEFINITIONS[examId];
    if (!examDef) return null;
    
    // Get actual question objects from QUESTIONS array
    const questions = examDef.questionIds
        .map(id => QUESTIONS.find(q => q.id === id))
        .filter(q => q !== undefined);
    
    return {
        ...examDef,
        questions: questions
    };
}

/**
 * Get all exam summaries for display
 * @returns {Array} Array of exam summaries
 */
function getExamSummaries() {
    return Object.entries(EXAM_DEFINITIONS).map(([id, exam]) => ({
        id: id,
        name: exam.name,
        description: exam.description,
        questionCount: exam.questionIds.length
    }));
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EXAM_DEFINITIONS, getExam, getExamSummaries };
}
