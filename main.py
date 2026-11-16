from chain import chain


def show(result):
    print()
    print(f"{result.title}  [{result.difficulty}]")
    print("-" * 50)
    print(result.summary)
    print("\nKey points:")
    for i, point in enumerate(result.key_points, start=1):
        print(f"  {i}. {point}")
    print(f"\nExample: {result.example}\n")


def ask(topic):
    topic = topic.strip()
    if not topic:
        print("Please type a topic.")
        return
    try:
        show(chain.invoke({"topic": topic}))
    except Exception as error:
        print(f"Something went wrong: {error}")


if __name__ == "__main__":
    while True:
        topic = input("Topic (or 'quit'): ")
        if topic.strip().lower() in {"quit", "exit"}:
            print("Bye!")
            break
        ask(topic)