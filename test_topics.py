import sys
import time

from chain import chain
from schemas import TopicSummary

TOPICS = [
    "Photosynthesis", "Binary search", "Inflation", "The French Revolution",
    "Neural networks", "TCP handshake", "Black holes", "Git branching",
    "Supply and demand", "Machine learning",
]

# python test_topics.py 3  -> test only the first 3 topics
limit = int(sys.argv[1]) if len(sys.argv) > 1 else len(TOPICS)
topics = TOPICS[:limit]

passed = 0
for topic in topics:
    try:
        result = chain.invoke({"topic": topic})
        assert isinstance(result, TopicSummary)
        assert len(result.key_points) == 3
        passed += 1
        print(f"PASS  {topic}")
    except Exception as error:
        print(f"FAIL  {topic}  ->  {error}")
    time.sleep(7)

print(f"\n{passed}/{len(topics)} passed")