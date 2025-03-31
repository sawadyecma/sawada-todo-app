-- タグを先に作成
INSERT INTO tags (name) VALUES
  ('仕事'),
  ('家庭'),
  ('重要');

-- タスクを作成
INSERT INTO tasks (title, due_date, is_done) VALUES
  ('会議の準備', '2025-04-01', FALSE),
  ('買い物に行く', '2025-03-30', TRUE),
  ('レポート提出', '2025-04-03', FALSE);

-- タスクとタグの紐付け
INSERT INTO task_tags (task_id, tag_id) VALUES
  (1, 1), -- 会議の準備 → 仕事
  (1, 3), -- 会議の準備 → 重要
  (2, 2), -- 買い物に行く → 家庭
  (3, 1), -- レポート提出 → 仕事
  (3, 3); -- レポート提出 → 重要
