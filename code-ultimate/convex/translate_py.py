from pygments.lexers import PythonLexer
from translate import Translator
from flask import Flask

app = Flask(__name__)
demo_code = "width = 5\n height = 10\n area = width * height\n print(f\"The area of the rectangle is \{area\} square units.\")\n for i in range(10):\n\tprint(i)"

@app.route('/translateCode')
def translateCode(CODE=demo_code, FROM_LANG="English", TO_LANG="Spanish"):
    
    CODE_COPY = CODE

    l = PythonLexer()
    doTranslate = ["Token.Name"]
    # dontTranslate = [Token.Name.Attribute, Token.Name.Builtin, Name.Builtin.Pseudo, ]
    translator= Translator(from_lang=FROM_LANG, to_lang=TO_LANG)

    tokens_unprocessed = l.get_tokens_unprocessed(CODE)
    tokens = [[t[2], str(t[1]), "", t[0]] for t in tokens_unprocessed]

    for tt in tokens:
        if tt[1] in doTranslate:
            tt[2] = translator.translate(tt[0])
            CODE_COPY = CODE_COPY.replace(tt[0], tt[2])

    return CODE_COPY


if __name__ == "__main__":
    app.run()





# from convex import ConvexClient
# client = ConvexClient('https://example-lion-123.convex.cloud')
# messages = client.query("listMessages")
# from pprint import pprint
# pprint(messages)

# [{'_creationTime': 1668107495676.2854,
#   '_id': Id(table_name='messages', id='c09S884lW4kTLdQMtu2ravf'),
#   'author': 'Tom',
#   'body': 'Have you tried Convex?'},
#  {'_creationTime': 1668107497732.2295,
#   '_id': Id(table_name='messages', id='G3m0cCQp65GQDfUjUDnTPEj'),
#   'author': 'Sarah',
#   'body': "Yeah, it's working pretty well for me."}]

# client.mutation("sendMessage")







# import regex as re
# import builtins

# builtin_functions = dir(__builtins__)
# more_builtins = ["def", "if", "elif", "else", "for", "while"]

# code_words = re.findall("[A-Za-z_][A-Za-z0-9_]*", demo_code)
# print(code_words)
# code_dir = dir(code_words)
# # print(code_dir)

# types_dict = {code_words[i] : code_dir[i] for i in range(len(code_words))}
# print(types_dict)

# is_built_in = [code_words[i] for i in range(len(code_words)) if code_words[i] in builtin_functions]
# print(is_built_in)




# import tokenize

# class TokenizeHelper:
#     def __init__(self, dummy):
#         self.dummy = dummy
#     def __call__(self, input):
#         return input

# tokenized_code = []
# lines = re.split("\n|(?:%0A)", demo_code)
# helper = TokenizeHelper(2)
# for l in lines:
#     tokenized_code.extend([t for t in tokenize.generate_tokens(helper(l))])
# print(tokenized_code)
# for line in re.split("[\n[%0A]]", demo_code):
#     toks = tokenize.tokenize(line)
#     for t in toks:
#         tokens.add(t)
# print(tokens)