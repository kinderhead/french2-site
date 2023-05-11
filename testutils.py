import json

raw = """1) The direct object pronoun "le" can replace a feminine singular noun.
a. True
b. False

correct - b

2) The indirect object pronoun "leur" is used to replace a plural noun.
a. True
b. False

correct - a

3) The direct object pronoun comes before the verb in a sentence. Je vais t'y voit.
a. True
b. False

correct - a

4) The indirect object pronoun "te" can replace the pronoun "toi."
a. True
b. False

correct - a

5) The direct object pronoun "la" is used to replace a masculine singular noun.
a. True
b. False

correct - b

6) The indirect object pronoun is always placed after the verb.
a. True
b. False

correct - b

7) The direct object pronoun "les" can replace both masculine and feminine plural nouns.
a. True
b. False

correct - a

8) The indirect object pronoun "me" is used to replace the pronoun "moi."
a. True
b. False

correct - b

9) The direct object pronouns "la" and "les" change to "l'" before a vowel sound.
a. True
b. False

correct - a

10) The indirect object pronoun "lui" can refer to both masculine and feminine nouns.
a. True
b. False

correct - a"""

questions = raw.split(")")
data = [];
for i in questions:
    if len(i) < 5: continue
    lines = i.split("\n")
    name = lines[0].strip()
    answers = []
    correct = 0;
    for e in lines[1:]:
        if "correct" in e.lower():
            check = e.split("-")[1].strip()
            if "a" in check: correct = 0
            if "b" in check: correct = 1
            if "c" in check: correct = 2
            if "d" in check: correct = 3
            break
        if e.strip() == "" or len(answers) >= 4:
            continue
        answers.append(e.replace("a.", "").replace("b.", "").replace("c.", "").replace("d.", "").strip())
    data.append({"question": name, "answers": answers, "correct": correct})

with open("test.json", "w") as f:
    json.dump(data, f)
